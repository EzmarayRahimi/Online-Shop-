import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import SpecialOffer from './components/SpecialOffer'
// RTL Persian grocery store
import Footer from './components/Footer'

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} />
      <Hero />
      <Categories />
      <Products addToCart={addToCart} />
      <SpecialOffer />
      <Footer />
    </div>
  )
}
