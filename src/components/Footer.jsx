export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 pt-14 pb-6 mt-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-700 rounded-xl flex items-center justify-center shadow">
              <span className="text-white text-xl">🛒</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-white">بازار سبز</span>
              <span className="text-[10px] text-gray-500">سوپرمارکت آنلاین افغانستان</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-500 mb-4">
            ارسال سریع در سراسر افغانستان. محصولات تازه، قیمت مناسب، خدمات قابل اعتماد.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { label: 'واتساپ',    icon: '💬' },
              { label: 'تلگرام',    icon: '✈️' },
              { label: 'اینستاگرام',icon: '📸' },
            ].map((s) => (
              <a key={s.label} href="#" title={s.label}
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-0.5 shadow">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-extrabold mb-4 text-sm">دسترسی سریع</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'خانه',           href: '#'           },
              { label: 'محصولات',        href: '#products'   },
              { label: 'دسته‌بندی‌ها',   href: '#categories' },
              { label: 'پیشنهادهای ویژه',href: '#offer'      },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block shrink-0" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-extrabold mb-4 text-sm">خدمات مشتریان</h4>
          <ul className="space-y-2.5 text-sm">
            {['سوالات متداول', 'سیاست ارسال', 'مرجوعی کالا', 'پیگیری سفارش', 'راهنمای خرید'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-green-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block shrink-0" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-extrabold mb-4 text-sm">تماس با ما</h4>
          <ul className="space-y-3 text-sm mb-5">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">📧</span>
              <span>info@bazarsabz.af</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">📞</span>
              <span dir="ltr">+93 700 123 456</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">📍</span>
              <span>کابل، افغانستان — شهر نو، سرک سوم</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">🚚</span>
              <span>ارسال سریع به سراسر افغانستان</span>
            </li>
          </ul>

          {/* Newsletter */}
          <p className="text-xs text-gray-500 mb-2">عضویت در خبرنامه</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors"
            />
            <button className="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-2 rounded-xl transition-colors font-bold">
              ثبت
            </button>
          </div>
        </div>
      </div>

      {/* Delivery banner */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="bg-green-900/40 border border-green-800/50 rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-6 text-sm text-green-300">
          {[
            { icon: '🚚', text: 'ارسال سریع در سراسر افغانستان' },
            { icon: '✅', text: 'محصولات تازه و با کیفیت' },
            { icon: '💰', text: 'قیمت‌های مناسب به افغانی' },
            { icon: '🔒', text: 'پرداخت امن و مطمئن' },
          ].map((f) => (
            <span key={f.text} className="flex items-center gap-2">
              <span>{f.icon}</span>
              <span>{f.text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto px-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} بازار سبز — افغانستان. تمامی حقوق محفوظ است.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-400 transition-colors">حریم خصوصی</a>
          <a href="#" className="hover:text-green-400 transition-colors">شرایط استفاده</a>
        </div>
      </div>
    </footer>
  )
}
