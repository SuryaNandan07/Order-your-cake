import { Link, useParams } from 'react-router-dom'
import { cakes } from '../data/cakes'

function CakeDetails() {
  const { id } = useParams()
  const cake = cakes.find((item) => item.id === id) || cakes[0]

  return (
    <main className="page-shell grid gap-10 py-10 lg:grid-cols-[0.95fr_1fr]">
      <img src={cake.image} alt={cake.name} className="aspect-[4/5] w-full rounded-lg object-cover shadow-xl" />
      <section className="rounded-lg border border-chocolate/10 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">{cake.category}</p>
        <h1 className="mt-3 text-4xl font-black text-ganache">{cake.name}</h1>
        <p className="mt-2 font-bold text-chocolate/60">{cake.bakery} | {cake.rating} star | {cake.servings} servings</p>
        <p className="mt-6 text-lg leading-8 text-cocoa/75">{cake.description}</p>
        <p className="mt-6 text-3xl font-black text-chocolate">Rs. {cake.price}</p>

        <div className="mt-8 grid gap-6">
          <label className="grid gap-2 text-sm font-black text-chocolate">
            Flavor
            <select className="rounded-md border border-chocolate/15 bg-cream px-4 py-3">
              {cake.flavors.map((flavor) => <option key={flavor}>{flavor}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-chocolate">
            Size
            <select className="rounded-md border border-chocolate/15 bg-cream px-4 py-3">
              {cake.sizes.map((size) => <option key={size}>{size}</option>)}
            </select>
          </label>
          <div>
            <p className="text-sm font-black text-chocolate">Toppings</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {cake.toppings.map((topping) => (
                <label key={topping} className="flex items-center gap-2 rounded-md bg-pink-soft px-3 py-3 text-sm font-bold text-chocolate">
                  <input type="checkbox" /> {topping}
                </label>
              ))}
            </div>
          </div>
          <label className="grid gap-2 text-sm font-black text-chocolate">
            Cake message
            <textarea className="min-h-28 rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Write a short message for the cake" />
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/cart" className="rounded-full bg-chocolate px-6 py-3 font-black text-cream">
            Add to cart
          </Link>
          <Link to="/cakes" className="rounded-full border border-chocolate/15 px-6 py-3 font-black text-chocolate">
            Back to cakes
          </Link>
        </div>
      </section>
    </main>
  )
}

export default CakeDetails
