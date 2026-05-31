import CakeCard from '../components/CakeCard'
import { cakes } from '../data/cakes'

function CakeListing() {
  return (
    <main className="page-shell py-10">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Customer bakery shelf</p>
          <h1 className="mt-2 text-4xl font-black text-ganache">Choose your cake</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', 'Chocolate', 'Fruit', 'Premium'].map((filter) => (
            <button key={filter} className="rounded-full border border-chocolate/15 bg-white px-4 py-2 text-sm font-black text-chocolate">
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </main>
  )
}

export default CakeListing
