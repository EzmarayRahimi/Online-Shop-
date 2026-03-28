import { useState } from 'react'

export default function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'خانه',        href: '#'           },
    { label: 'محصولات',     href: '#products'   },
    { label: 'دسته‌بندی',   href: '#categories' },
    { label: 'پیشنهادها',   href: '#offer'      },
    { label: 'تماس با ما',  href: '#footer'     },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-700 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white text-xl">🛒</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold bg-gradient-to-l from-green-500 to-green-700 bg-clip-text text-transparent">
              بازار سبز
            </span>
            <span className="text-[10px] text-gray-400 font-medium">سوپرمارکت آنلاین افغانستان</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-600">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative hover:text-green-600 transition-colors duration-200 after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8M7 13L5.4 5M17 21a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -left-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login */}
          <button className="hidden md:flex items-center gap-1.5 bg-gradient-to-l from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-green-400/40 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            ورود / ثبت‌نام
          </button>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 text-sm font-semibold text-gray-700 shadow-lg">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="hover:text-green-600 transition-colors py-1.5 border-b border-gray-50 last:border-0">
              {l.label}
            </a>
          ))}
          <button className="bg-gradient-to-l from-green-500 to-green-700 text-white px-5 py-2.5 rounded-full w-fit font-bold mt-1 shadow">
            ورود / ثبت‌نام
          </button>
        </div>
      )}
    </header>
  )
}
