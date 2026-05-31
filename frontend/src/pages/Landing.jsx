import { Link } from 'react-router-dom'
import CakeCard from '../components/CakeCard'
import { cakes } from '../data/cakes'

function Landing() {
  return (
    <main>
      <section className="page-shell grid min-h-[calc(100vh-80px)] items-center gap-10 py-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-honey">Fresh custom cakes</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight text-ganache md:text-7xl">
            Order celebration cakes from premium local bakeries.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-cocoa/70">
            Browse handcrafted cakes, choose flavors and toppings, and preview a polished checkout flow built for
            customers and bakery owners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/cakes" className="rounded-full bg-chocolate px-6 py-3 font-black text-cream shadow-lg">
              Browse cakes
            </Link>
            <Link to="/owner" className="rounded-full border border-chocolate/15 px-6 py-3 font-black text-chocolate">
              Owner dashboard
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={cakes[0].image}
            alt={cakes[0].name}
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-cream/95 p-5 shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-chocolate/55">Today favorite</p>
            <p className="mt-2 text-2xl font-black text-ganache">{cakes[0].name}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="page-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Signature picks</p>
              <h2 className="mt-2 text-3xl font-black text-ganache">Made for moments that matter</h2>
            </div>
            <Link to="/cakes" className="font-black text-chocolate underline decoration-pink decoration-4 underline-offset-4">
              View all cakes
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cakes.slice(0, 3).map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
