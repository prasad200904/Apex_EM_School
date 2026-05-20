export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative bg-[#1E3A8A] pt-32 pb-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F97316]/10 translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 -translate-x-20 translate-y-20" />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {breadcrumb && (
          <p className="text-orange-300 text-sm font-body mb-3 tracking-widest uppercase">{breadcrumb}</p>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-blue-200 font-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-6 section-divider" />
      </div>
    </section>
  )
}
