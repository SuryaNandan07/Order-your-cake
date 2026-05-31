import { Link } from 'react-router-dom'

function CakeCard({ cake }) {
  return (
    <article className="overflow-hidden rounded-lg border border-chocolate/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/cakes/${cake.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-cream-strong">
          <img src={cake.image} alt={cake.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-pink-soft px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-chocolate">
              {cake.category}
            </span>
            <span className="text-sm font-black text-honey">{cake.rating} star</span>
          </div>
          <div>
            <h3 className="text-xl font-black text-ganache">{cake.name}</h3>
            <p className="mt-1 text-sm font-semibold text-chocolate/60">{cake.bakery}</p>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-black text-chocolate">Rs. {cake.price}</p>
            <p className="text-sm font-bold text-cocoa/60">{cake.servings} servings</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default CakeCard
