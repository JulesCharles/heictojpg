export default function PageHero({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 pt-8 pb-12 text-center ">
        {children}
      </div>
    </div>
  );
}
