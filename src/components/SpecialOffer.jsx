export default function SpecialOffer() {
  return (
    <section id="offer" className="max-w-7xl mx-auto px-4 py-10">
      <div
        className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[280px] flex items-center"
        style={{ backgroundImage: "url('/images/photo_15_2026-03-28_18-58-23.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/92 via-green-800/75 to-transparent" />
        <div className="absolute right-0 top-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          <div className="fade-in">
            <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wide mb-4 shadow">
              ⏰ پیشنهاد ویژه محدود
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
              ۳۰٪ تخفیف برای
              <br />
              <span className="text-yellow-300">اولین سفارش شما</span>
            </h2>
            <p className="text-green-200 text-sm max-w-sm leading-loose">
              با کد{' '}
              <span className="font-extrabold text-yellow-300 bg-yellow-400/20 px-2 py-0.5 rounded-lg">
                SABZ30
              </span>{' '}
              در هنگام پرداخت، ۳۰٪ تخفیف دریافت کنید.
              <br />
              <span className="text-green-300 text-xs">ارسال رایگان به سراسر افغانستان</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <button className="bg-gradient-to-l from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 text-yellow-900 font-extrabold px-10 py-3.5 rounded-full shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 hover:-translate-y-0.5 text-sm whitespace-nowrap">
              استفاده از کد تخفیف
            </button>
            <p className="text-green-300 text-xs">تا پایان هفته معتبر است</p>
          </div>
        </div>
      </div>
    </section>
  )
}
