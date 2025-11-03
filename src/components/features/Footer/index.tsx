import FooterImage from "@/assets/Hornet.png";
import { footerConfig } from "./config";

export function Footer() {
  return (
    <footer className="relative w-full">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url(${FooterImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          maxWidth: "300px",
          maxHeight: "300px",
          marginLeft: "auto",
          filter: "drop-shadow(0 0 60px rgba(59, 130, 246, 0.3))",
        }}
      />

      <div className="relative z-10">
        <div className="text-center space-y-6 mb-8 pt-8">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Created by</p>
            <a
              href={footerConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              {footerConfig.author.name}
            </a>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Made with help from</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {footerConfig.contributors.map(contributor => (
                <a
                  key={contributor.name}
                  href={contributor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-300/70 hover:text-blue-200 transition-colors"
                >
                  {contributor.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2 pb-8">
          {footerConfig.links.map((link, index) => (
            <div key={link.label} className="flex items-center gap-x-2">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-500 hover:text-blue-400 transition-colors font-medium"
              >
                <span className="text-sm">{link.icon}</span>
                <span>{link.label}</span>
              </a>
              {index < footerConfig.links.length - 1 && <span className="text-gray-700 text-sm">·</span>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
