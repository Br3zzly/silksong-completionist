import { MapButton, LazyImage } from "@/components/ui";
import { getHoverBlurClassNames } from "@/utils";
import type { NormalizedSection, NormalizedItem } from "@/dictionary";

interface QuillsDescriptionProps {
  showSpoilers?: boolean;
  sectionData?: NormalizedSection & { items: NormalizedItem[] };
}

type QuillType = {
  name: string;
  state: number;
  act: string;
  imagePath: string;
  mapLink: string;
};

export const QuillsDescription = ({ showSpoilers = false, sectionData }: QuillsDescriptionProps) => {
  const blurClassNames = getHoverBlurClassNames({ shouldBlur: !showSpoilers, onGroupHover: false });

  const quillItem = sectionData?.items?.find((item: NormalizedItem) => {
    const parsingInfo = item.parsingInfo;
    return !Array.isArray(parsingInfo) && parsingInfo.type === "quill";
  });
  const quillState = (quillItem?.saveMeta?.value as number) || 0;

  const quillTypes: QuillType[] = [
    {
      name: "White Quill",
      state: 1,
      act: "ACT 1",
      imagePath: "quills/WhiteQuill.png",
      mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477852",
    },
    {
      name: "Red Quill",
      state: 2,
      act: "ACT 2",
      imagePath: "quills/RedQuill.png",
      mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=481815",
    },
    {
      name: "Purple Quill",
      state: 3,
      act: "ACT 3",
      imagePath: "quills/PurpleQuill.png",
      mapLink: "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=481815",
    },
  ];

  const genericQuillDescription =
    "Writing implements for recording one's travels. One's required to update any of the acquired maps.";

  const createQuillButton = ({ quill, shouldBlur = false }: { quill: QuillType; shouldBlur?: boolean }) => (
    <MapButton
      mapLink={quill.mapLink}
      titleName={`Quills · ${quill.name}`}
      className={`-mt-1 inline-flex items-center align-middle ${shouldBlur ? blurClassNames : ""}`}
    >
      <span className="inline-flex items-center gap-1">
        <LazyImage src={quill.imagePath} alt={quill.name} className="w-4 h-4 inline-block" />
        {quill.name}
      </span>
    </MapButton>
  );

  const getDescriptionContent = () => {
    const currentQuill = quillTypes.find(q => q.state === quillState);
    const [white, red, purple] = quillTypes;

    if (!currentQuill) {
      return (
        <>
          {genericQuillDescription}
          <br />
          <br />
          You can purchase a {createQuillButton({ quill: white, shouldBlur: true })} from Shakra for 50 Rosaries. Or you
          can instead choose to get{" "}
          <span className={blurClassNames}>one of the colored quills from Trobbio's desk for free</span> later — either
          a {createQuillButton({ quill: red, shouldBlur: true })} in {red.act}, or a{" "}
          {createQuillButton({ quill: purple, shouldBlur: true })} in {purple.act}.
        </>
      );
    }

    if (quillState === 2) {
      // Red Quill
      return (
        <>
          {genericQuillDescription}
          <br />
          <br />
          You obtained the {createQuillButton({ quill: currentQuill })}, instead of purchasing a{" "}
          {createQuillButton({ quill: white })} from Shakra. You missed out on getting a{" "}
          {createQuillButton({ quill: purple, shouldBlur: true })} in {purple.act}.
        </>
      );
    } else if (quillState === 3) {
      // Purple Quill
      return (
        <>
          {genericQuillDescription}
          <br />
          <br />
          You obtained the {createQuillButton({ quill: currentQuill })}, instead of purchasing a{" "}
          {createQuillButton({ quill: white })} from Shakra, or getting a {createQuillButton({ quill: red })} in{" "}
          {red.act}.
        </>
      );
    } else {
      // White Quill
      return (
        <>
          {genericQuillDescription}
          <br />
          <br />
          You purchased the {createQuillButton({ quill: currentQuill })}. You missed out on getting either a{" "}
          {createQuillButton({ quill: red, shouldBlur: true })} in {red.act}, or a{" "}
          {createQuillButton({ quill: purple, shouldBlur: true })} in {purple.act}.
        </>
      );
    }
  };

  return <p className="text-sm text-gray-300">{getDescriptionContent()}</p>;
};
