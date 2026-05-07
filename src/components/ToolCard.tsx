import Link from "next/link";

export interface Tool {
  href: string;
  label: string;
  desc: string;
  icon: string;
  primary?: boolean;
}

export const colorSchemes = {
  blue: { iconBg: "bg-blue-100", iconText: "text-blue-600", hoverBorder: "hover:border-blue-300", tagBg: "bg-blue-50", tagText: "text-blue-600" },
  green: { iconBg: "bg-emerald-100", iconText: "text-emerald-600", hoverBorder: "hover:border-emerald-300", tagBg: "bg-emerald-50", tagText: "text-emerald-600" },
  purple: { iconBg: "bg-violet-100", iconText: "text-violet-600", hoverBorder: "hover:border-violet-300", tagBg: "bg-violet-50", tagText: "text-violet-600" },
  red: { iconBg: "bg-rose-100", iconText: "text-rose-600", hoverBorder: "hover:border-rose-300", tagBg: "bg-rose-50", tagText: "text-rose-600" },
};

export function FileIcon({ format, color }: { format: string; color: string }) {
  const bgColors: Record<string, string> = {
    blue: "#3b82f6", green: "#10b981", purple: "#8b5cf6", red: "#f43f5e",
  };
  const fill = bgColors[color] || bgColors.blue;
  return (
    <div className="relative w-14 h-16 mb-3">
      <svg viewBox="0 0 40 48" className="w-full h-full" fill="none">
        <path d="M4 4C4 1.79 5.79 0 8 0H26L36 10V44C36 46.21 34.21 48 32 48H8C5.79 48 4 46.21 4 44V4Z" fill={fill} opacity="0.12" />
        <path d="M26 0L36 10H30C27.79 10 26 8.21 26 6V0Z" fill={fill} opacity="0.25" />
        <path d="M4 4C4 1.79 5.79 0 8 0H26L36 10V44C36 46.21 34.21 48 32 48H8C5.79 48 4 46.21 4 44V4Z" stroke={fill} strokeWidth="1.5" opacity="0.3" />
      </svg>
      <span
        className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-extrabold tracking-wide text-white px-1.5 py-0.5 rounded"
        style={{ backgroundColor: fill }}
      >
        {format}
      </span>
    </div>
  );
}

export default function ToolCard({ tool, scheme }: { tool: Tool; scheme: keyof typeof colorSchemes }) {
  const colors = colorSchemes[scheme];
  return (
    <Link
      href={tool.href}
      className={`group block bg-white rounded-2xl border border-gray-200/80 p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${colors.hoverBorder} ${tool.primary ? "ring-2 ring-blue-200 shadow-md" : "shadow-sm"}`}
    >
      <FileIcon format={tool.icon} color={scheme} />
      <h3 className="font-semibold text-gray-900 text-[15px] mb-1.5 leading-snug">{tool.label}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed">{tool.desc}</p>
    </Link>
  );
}

export function ToolSection({
  title,
  tag,
  tools,
  scheme,
  seeAllHref,
}: {
  title: string;
  tag: string;
  tools: Tool[];
  scheme: keyof typeof colorSchemes;
  seeAllHref?: string;
}) {
  const colors = colorSchemes[scheme];
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.tagBg} ${colors.tagText}`}>
          {tag}
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.href} tool={tool} scheme={scheme} />
        ))}
      </div>
      {seeAllHref && (
        <div className="mt-6 text-center">
          <Link href={seeAllHref} className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${colors.tagText} hover:underline`}>
            Voir tous les outils
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      )}
    </section>
  );
}
