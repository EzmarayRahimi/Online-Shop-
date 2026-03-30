export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[560px] flex items-center overflow-hidden"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/photo_1_2026-03-28_18-58-88.jpg')` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/55 to-black/20" />

      {/* Decorative blobs */}
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/2 top-0 w-72 h-72 bg-green-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl fade-in">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
            🌿 تازه · ارگانیک · افغانستان
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            خرید تازه‌ترین
            <br />
            <span className="bg-gradient-to-l from-green-300 to-green-500 bg-clip-text text-transparent">
              مواد غذایی در هرات
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 leading-loose max-w-xl">
            بهترین میوه‌ها، سبزیجات تازه و مواد غذایی روزانه را با قیمت مناسب سفارش دهید.
            ارسال سریع به سراسر هرات.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#products"
              className="bg-gradient-to-l from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              مشاهده محصولات
            </a>
            <a
              href="#categories"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              دسته‌بندی‌ها
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: '+۵۰۰',  label: 'نوع محصول'       },
              { value: '+۲۰۰۰', label: 'مشتری راضی'      },
              { value: '۴',    label: 'ولایت تحت پوشش'  },
              { value: '۲۴/۷',  label: 'پشتیبانی آنلاین' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-white font-extrabold text-2xl">{s.value}</span>
                <span className="text-gray-400 text-xs mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
