using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using BepInEx;
using BepInEx.Configuration;
using UnityEngine;

namespace SilksongMenuCapture
{
    [BepInPlugin("local.silksong.menucapture", "Silksong Menu Capture", "0.2.0")]
    [BepInProcess("Hollow Knight Silksong.exe")]
    public sealed class MenuCapture : BaseUnityPlugin
    {
        private ConfigEntry<int> frameRate;
        private ConfigEntry<int> seconds;
        private ConfigEntry<float> simulationSpeed;
        private ConfigEntry<string> outputFolder;
        private readonly List<Action> restore = new List<Action>();
        private readonly List<Action> previewRestore = new List<Action>();
        private Coroutine capture;
        private bool cancel;
        private bool capturing;
        private bool panelOpen;
        private float previewSpeed;
        private int previewSeconds, previewFps;
        private Rect panelRect = new Rect(20, 20, 420, 390);
        private string status = "";

        private void Awake()
        {
            frameRate = Config.Bind("Capture", "FramesPerSecond", 30,
                new ConfigDescription("Simulation and output frame rate.", new AcceptableValueRange<int>(1, 60)));
            seconds = Config.Bind("Capture", "Seconds", 10,
                new ConfigDescription("Length of the PNG sequence.", new AcceptableValueRange<int>(1, 60)));
            simulationSpeed = Config.Bind("Capture", "SimulationSpeed", 0.6f,
                new ConfigDescription("Game speed during live preview and recording. 0.6 is 40% slower.", new AcceptableValueRange<float>(0.05f, 1f)));
            outputFolder = Config.Bind("Capture", "OutputFolder", Path.Combine(Paths.GameRootPath, "MenuCaptures"),
                "Absolute folder for screenshots, frame sequences, and capture metadata.");
            Logger.LogInfo("Menu Capture ready: F8 screenshot, F9 live capture panel, F10 cancel/close. Use from the main menu.");
        }

        private void Update()
        {
            if (panelOpen && (!GameManager.instance || !GameManager.instance.IsMenuScene()))
            {
                OnDisable();
                return;
            }
            if (Input.GetKeyDown(KeyCode.F10))
            {
                if (capturing) cancel = true;
                else ClosePanel();
            }
            if (capturing) return;
            if (Input.GetKeyDown(KeyCode.F8)) Begin(false);
            else if (Input.GetKeyDown(KeyCode.F9))
            {
                if (panelOpen) ClosePanel();
                else OpenPanel();
            }
        }

        private bool TryMenu(out MenuStyles styles, out UIManager ui)
        {
            var manager = GameManager.instance;
            styles = MenuStyles.Instance;
            ui = FindFirstObjectByType<UIManager>();
            if (!manager || !manager.IsMenuScene() || !styles || !ui ||
                !ui.mainMenuScreen || !ui.mainMenuScreen.gameObject.activeInHierarchy ||
                !ui.mainMenuScreen.interactable || ui.mainMenuScreen.alpha < 0.99f)
            {
                Logger.LogWarning("Return to the main menu and let its transition finish before capturing.");
                return false;
            }
            return true;
        }

        private void OpenPanel()
        {
            if (!TryMenu(out _, out var ui)) return;
            try
            {
                previewSpeed = simulationSpeed.Value;
                previewSeconds = seconds.Value;
                previewFps = frameRate.Value;
                var previousScale = Time.timeScale;
                var previousDelta = Time.captureDeltaTime;
                var previousFixedDelta = Time.fixedDeltaTime;
                previewRestore.Add(() => { Time.timeScale = previousScale; Time.captureDeltaTime = previousDelta; Time.fixedDeltaTime = previousFixedDelta; });
                Time.captureDeltaTime = 0;
                // Unscaled particles/animators would otherwise ignore the slider and
                // advance using wall-clock time while PNG encoding stalls the game.
                foreach (var particles in FindObjectsByType<ParticleSystem>(FindObjectsSortMode.None))
                {
                    var module = particles.main;
                    if (!module.useUnscaledTime) continue;
                    previewRestore.Add(() => { if (particles) { var old = particles.main; old.useUnscaledTime = true; } });
                    module.useUnscaledTime = false;
                }
                foreach (var animator in FindObjectsByType<Animator>(FindObjectsSortMode.None))
                {
                    if (animator.updateMode != AnimatorUpdateMode.UnscaledTime) continue;
                    previewRestore.Add(() => { if (animator) animator.updateMode = AnimatorUpdateMode.UnscaledTime; });
                    animator.updateMode = AnimatorUpdateMode.Normal;
                }
                HideMenu(ui, previewRestore);
                var previousCursor = Cursor.visible;
                var previousLock = Cursor.lockState;
                previewRestore.Add(() => { Cursor.visible = previousCursor; Cursor.lockState = previousLock; });
                Cursor.lockState = CursorLockMode.None;
                Cursor.visible = true;
                panelOpen = true;
                Time.timeScale = previewSpeed;
                status = "Live preview: adjust the slider and watch the background.";
            }
            catch (Exception error)
            {
                Logger.LogError(error);
                Restore(previewRestore);
                panelOpen = false;
            }
        }

        private void LateUpdate()
        {
            if (panelOpen) Time.timeScale = previewSpeed;
        }

        private void SaveSettings()
        {
            simulationSpeed.Value = previewSpeed;
            seconds.Value = previewSeconds;
            frameRate.Value = previewFps;
        }

        private void ClosePanel()
        {
            if (!panelOpen) return;
            // Restoration must still happen if writing the config fails.
            try { SaveSettings(); }
            catch (Exception error) { Logger.LogError(error); }
            finally { panelOpen = false; Restore(previewRestore); }
        }

        private void OnGUI()
        {
            if (!panelOpen || capturing) return;
            var oldMatrix = GUI.matrix;
            var scale = Mathf.Clamp(Screen.height / 900f, 0.8f, 1.6f);
            GUI.matrix = Matrix4x4.Scale(new Vector3(scale, scale, 1));
            panelRect.x = Mathf.Clamp(panelRect.x, 0, Mathf.Max(0, Screen.width / scale - panelRect.width));
            panelRect.y = Mathf.Clamp(panelRect.y, 0, Mathf.Max(0, Screen.height / scale - panelRect.height));
            panelRect = GUILayout.Window(GetInstanceID(), panelRect, DrawPanel, "Silksong background capture");
            GUI.matrix = oldMatrix;
        }

        private void DrawPanel(int id)
        {
            GUILayout.Label("Background speed: " + Mathf.RoundToInt(previewSpeed * 100) + "%");
            previewSpeed = Mathf.Round(GUILayout.HorizontalSlider(previewSpeed, 0.05f, 1f) * 100) / 100f;
            GUILayout.BeginHorizontal();
            if (GUILayout.Button("25%")) previewSpeed = 0.25f;
            if (GUILayout.Button("60%")) previewSpeed = 0.6f;
            if (GUILayout.Button("100%")) previewSpeed = 1f;
            GUILayout.EndHorizontal();
            GUILayout.Space(12);
            GUILayout.Label("Output frame rate");
            previewFps = GUILayout.SelectionGrid(previewFps <= 30 ? 0 : 1, new[] { "30 FPS", "60 FPS" }, 2) == 0 ? 30 : 60;
            GUILayout.Label("Video duration: " + previewSeconds + " seconds");
            previewSeconds = Mathf.RoundToInt(GUILayout.HorizontalSlider(previewSeconds, 5, 60));
            GUILayout.Label((previewFps * previewSeconds) + " frames at " + Screen.width + " x " + Screen.height);
            GUILayout.Label("The exported video already contains the selected slow motion.");
            GUILayout.Label("Play it at normal speed on the website.");
            GUILayout.Space(12);
            GUILayout.BeginHorizontal();
            if (GUILayout.Button("Capture still (F8)", GUILayout.Height(32))) Begin(false);
            if (GUILayout.Button("Record sequence", GUILayout.Height(32))) Begin(true);
            GUILayout.EndHorizontal();
            GUILayout.Label("Panel hides during capture. F10 stops recording.");
            GUILayout.Space(8);
            GUILayout.Label(status);
            if (GUILayout.Button("Close and restore game speed (F9)", GUILayout.Height(30))) ClosePanel();
            GUI.DragWindow(new Rect(0, 0, panelRect.width, 24));
        }

        private void Begin(bool sequence)
        {
            if (capturing || !TryMenu(out var styles, out var ui)) return;
            if (!Path.IsPathRooted(outputFolder.Value))
            {
                Logger.LogError("OutputFolder must be an absolute path.");
                return;
            }
            if (panelOpen)
            {
                Time.timeScale = previewSpeed;
                SaveSettings();
            }
            cancel = false;
            capturing = true;
            capture = StartCoroutine(Capture(sequence, styles, ui));
        }

        private IEnumerator Capture(bool sequence, MenuStyles styles, UIManager ui)
        {
            try
            {
                var style = styles.Styles[styles.CurrentStyle];
                var label = string.Concat(style.DisplayName.Select(c => char.IsLetterOrDigit(c) ? c : '_'));
                var folder = Path.Combine(outputFolder.Value, DateTime.Now.ToString("yyyyMMdd-HHmmss-fff") + "-" + label);
                Directory.CreateDirectory(folder);
                var fps = frameRate.Value;
                var targetFrames = sequence ? fps * seconds.Value : 1;
                var metadata = new CaptureInfo
                {
                    unityVersion = Application.unityVersion,
                    style = style.DisplayName,
                    width = Screen.width,
                    height = Screen.height,
                    framesPerSecond = sequence ? fps : 0,
                    requestedFrames = targetFrames,
                    simulationSpeed = Time.timeScale,
                    cameras = Camera.allCameras.Select(c => new CameraInfo
                    {
                        path = ObjectPath(c.transform), orthographic = c.orthographic,
                        orthographicSize = c.orthographicSize, fieldOfView = c.fieldOfView,
                        depth = c.depth, position = c.transform.position
                    }).ToArray()
                };

                HideMenu(ui, restore);
                var cursorVisible = Cursor.visible;
                restore.Add(() => Cursor.visible = cursorVisible);
                Cursor.visible = false;
                var previousCaptureDelta = Time.captureDeltaTime;
                restore.Add(() => Time.captureDeltaTime = previousCaptureDelta);
                if (sequence) Time.captureFramerate = fps;
                Logger.LogInfo("Capturing " + targetFrames + " frame(s) to " + folder + ". F10 cancels.");
                // Allow one rendered frame for the UI visibility changes to settle.
                yield return new WaitForEndOfFrame();
                for (var index = 0; index < targetFrames && !cancel; index++)
                {
                    yield return new WaitForEndOfFrame();
                    if (!GameManager.instance || !GameManager.instance.IsMenuScene()) break;
                    if (Screen.width != metadata.width || Screen.height != metadata.height)
                    {
                        Logger.LogWarning("Capture stopped because the window resolution changed.");
                        break;
                    }
                    if (!SaveFrame(Path.Combine(folder, sequence ? "frame-" + index.ToString("D5") + ".png" : "background.png"))) break;
                    metadata.capturedFrames++;
                }
                metadata.complete = metadata.capturedFrames == targetFrames;
                File.WriteAllText(Path.Combine(folder, "capture.json"), JsonUtility.ToJson(metadata, true));
                status = "Saved " + metadata.capturedFrames + " frame(s). " + (metadata.complete ? "Complete." : "Stopped early.");
                Logger.LogInfo(status + " " + folder);
            }
            finally
            {
                Restore(restore);
                capture = null;
                capturing = false;
            }
        }

        private bool SaveFrame(string path)
        {
            Texture2D texture = null;
            try
            {
                texture = ScreenCapture.CaptureScreenshotAsTexture();
                if (!texture) throw new InvalidOperationException("Unity returned no screenshot texture.");
                File.WriteAllBytes(path, ImageConversion.EncodeToPNG(texture));
                return true;
            }
            catch (Exception error)
            {
                Logger.LogError(error);
                return false;
            }
            finally
            {
                if (texture) Destroy(texture);
            }
        }

        private static void HideMenu(UIManager ui, List<Action> undo)
        {
            foreach (var canvas in FindObjectsByType<Canvas>(FindObjectsSortMode.None))
            {
                if (!canvas.enabled) continue;
                undo.Add(() => { if (canvas) canvas.enabled = true; });
                canvas.enabled = false;
            }
            var titleRenderers = new HashSet<Renderer>();
            if (ui.gameTitle) titleRenderers.Add(ui.gameTitle);
            if (ui.subtitleFSM)
                foreach (var renderer in ui.subtitleFSM.GetComponentsInChildren<Renderer>(true)) titleRenderers.Add(renderer);
            foreach (var renderer in titleRenderers)
            {
                var previous = renderer.forceRenderingOff;
                undo.Add(() => { if (renderer) renderer.forceRenderingOff = previous; });
                renderer.forceRenderingOff = true;
            }
            if (ui.eventSystem)
            {
                var events = ui.eventSystem;
                var previous = events.enabled;
                undo.Add(() => { if (events) events.enabled = previous; });
                events.enabled = false;
            }
        }

        private void Restore(List<Action> actions)
        {
            for (var i = actions.Count - 1; i >= 0; i--)
                try { actions[i](); } catch (Exception error) { Logger.LogError(error); }
            actions.Clear();
        }

        private void OnDisable()
        {
            cancel = true;
            if (capture != null) StopCoroutine(capture);
            Restore(restore);
            ClosePanel();
            capture = null;
            capturing = false;
        }

        private static string ObjectPath(Transform item) => item.parent ? ObjectPath(item.parent) + "/" + item.name : item.name;

        [Serializable]
        private sealed class CaptureInfo
        {
            public string unityVersion, style;
            public int width, height, framesPerSecond, requestedFrames, capturedFrames;
            public bool complete;
            public float simulationSpeed;
            public CameraInfo[] cameras;
        }

        [Serializable]
        private sealed class CameraInfo
        {
            public string path;
            public bool orthographic;
            public float orthographicSize, fieldOfView, depth;
            public Vector3 position;
        }
    }
}
