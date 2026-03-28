export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden h-44 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-gradient-to-l from-green-500 to-green-700 text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
            تخفیف
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-green-600 font-bold mb-1">{product.category}</p>
        <h3 className="text-gray-800 font-bold text-sm mb-1 flex-1 leading-relaxed">{product.title}</h3>
        <p className="text-xs text-gray-400 mb-2">{product.weight}</p>

        {/* Stars */}
        <div className="flex gap-0.5 mb-3">
          {[1,2,3,4,5].map((s) => (
            <svg key={s} className={`w-3 h-3 ${s <= product.stars ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto gap-2">
          <div className="flex flex-col">
            <span className="text-green-700 font-extrabold text-base leading-tight">
              {product.price} <span className="text-xs font-bold text-green-600">AFN</span>
            </span>
            {product.oldPrice && (
              <span className="text-gray-400 text-xs line-through">
                {product.oldPrice} AFN
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-l from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 active:scale-95 text-white text-xs font-extrabold px-3 py-2 rounded-full shadow hover:shadow-green-400/40 transition-all duration-200 whitespace-nowrap"
          >
            + افزودن
          </button>
        </div>
      </div>
    </div>
  )
}
