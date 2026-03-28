import { useState } from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1,  title: 'سیب سرخ تازه',         category: 'میوه‌جات', weight: '۱ کیلوگرم', price: '50',  oldPrice: '70',  badge: 'پرفروش', stars: 5, image: '/images/photo_2_2026-03-28_18-58-23.jpg' },
  { id: 2,  title: 'بروکلی ارگانیک',        category: 'سبزیجات', weight: '۵۰۰ گرم',   price: '35',  oldPrice: null,  badge: 'ارگانیک',stars: 4, image: '/images/photo_3_2026-03-28_18-58-23.jpg' },
  { id: 3,  title: 'شیر تازه کامل',          category: 'لبنیات',  weight: '۱ لیتر',    price: '40',  oldPrice: null,  badge: null,     stars: 5, image: '/images/photo_4_2026-03-28_18-58-23.jpg' },
  { id: 4,  title: 'نان خمیرترش',            category: 'نانوایی', weight: '۴۰۰ گرم',   price: '60',  oldPrice: '80',  badge: 'جدید',   stars: 4, image: '/images/photo_5_2026-03-28_18-58-23.jpg' },
  { id: 5,  title: 'آب پرتقال طبیعی',       category: 'نوشیدنی', weight: '۱ لیتر',    price: '55',  oldPrice: null,  badge: null,     stars: 5, image: '/images/photo_6_2026-03-28_18-58-23.jpg' },
  { id: 6,  title: 'چهارمغز (والنت)',        category: 'خشکبار',  weight: '۲۰۰ گرم',   price: '120', oldPrice: '150', badge: 'تخفیف',  stars: 5, image: '/images/photo_7_2026-03-28_18-58-23.jpg' },
  { id: 7,  title: 'کیله رسیده',             category: 'میوه‌جات', weight: '۱ کیلوگرم', price: '30',  oldPrice: null,  badge: null,     stars: 4, image: '/images/photo_8_2026-03-28_18-58-23.jpg' },
  { id: 8,  title: 'بادنجان رومی گیلاسی',   category: 'سبزیجات', weight: '۲۵۰ گرم',   price: '25',  oldPrice: null,  badge: 'تازه',   stars: 5, image: '/images/photo_9_2026-03-28_18-58-23.jpg' },
  { id: 9,  title: 'ماست محلی',              category: 'لبنیات',  weight: '۵۰۰ گرم',   price: '45',  oldPrice: null,  badge: null,     stars: 4, image: '/images/photo_10_2026-03-28_18-58-23.jpg' },
  { id: 10, title: 'نان روغنی تازه',         category: 'نانوایی', weight: '۴ عدد',     price: '70',  oldPrice: '90',  badge: 'جدید',   stars: 5, image: '/images/photo_11_2026-03-28_18-58-23.jpg' },
  { id: 11, title: 'آب معدنی',               category: 'نوشیدنی', weight: '۱.۵ لیتر',  price: '20',  oldPrice: null,  badge: null,     stars: 3, image: '/images/photo_12_2026-03-28_18-58-23.jpg' },
  { id: 12, title: 'کشمش سبز قندهاری',      category: 'خشکبار',  weight: '۲۵۰ گرم',   price: '85',  oldPrice: '100', badge: 'تخفیف',  stars: 5, image: '/images/photo_13_2026-03-28_18-58-23.jpg' },
]

const tabs = ['همه', 'میوه‌جات', 'سبزیجات', 'لبنیات', 'نانوایی', 'نوشیدنی', 'خشکبار']

export default function Products({ addToCart }) {
  const [active, setActive] = useState('همه')

  const filtered = active === 'همه' ? products : products.filter((p) => p.category === active)

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="text-green-500 text-xs font-extrabold uppercase tracking-widest">محصولات ما</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">محصولات تازه و برگزیده</h2>
        <p className="text-gray-500 mt-2 text-sm">مستقیم از مزرعه به سفره شما — با قیمت مناسب</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              active === tab
                ? 'bg-gradient-to-l from-green-500 to-green-700 text-white shadow-md shadow-green-300/40'
                : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200 hover:border-green-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  )
}
