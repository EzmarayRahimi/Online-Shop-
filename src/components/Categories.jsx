const categories = [
  { id: 1, name: 'میوه‌جات',    image: '/images/photo_2_2026-03-28_18-58-23.jpg', from: 'from-orange-500', to: 'to-orange-600' },
  { id: 2, name: 'سبزیجات',    image: '/images/photo_3_2026-03-28_18-58-23.jpg', from: 'from-green-500',  to: 'to-green-700'  },
  { id: 3, name: 'لبنیات',     image: '/images/photo_4_2026-03-28_18-58-23.jpg', from: 'from-yellow-400', to: 'to-yellow-600' },
  { id: 4, name: 'نانوایی',    image: '/images/photo_5_2026-03-28_18-58-23.jpg', from: 'from-amber-500',  to: 'to-amber-700'  },
  { id: 5, name: 'نوشیدنی',    image: '/images/photo_6_2026-03-28_18-58-23.jpg', from: 'from-blue-500',   to: 'to-blue-700'   },
  { id: 6, name: 'خشکبار',     image: '/images/photo_7_2026-03-28_18-58-23.jpg', from: 'from-rose-500',   to: 'to-rose-700'   },
]

export default function Categories() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="text-green-500 text-xs font-extrabold uppercase tracking-widest">دسته‌بندی محصولات</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">بر اساس دسته خرید کنید</h2>
        <p className="text-gray-500 mt-2 text-sm">همه چیز در یک جا — تازه و با کیفیت</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 aspect-square"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${cat.from} ${cat.to} opacity-55 group-hover:opacity-70 transition-opacity duration-300`} />
            <div className="absolute inset-0 flex items-end justify-center pb-4">
              <span className="text-white font-extrabold text-sm drop-shadow-lg">{cat.name}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
