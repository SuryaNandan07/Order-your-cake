import OwnerSidebar from '../components/OwnerSidebar'

function AddCake() {
  return (
    <main className="page-shell grid gap-6 py-10 lg:grid-cols-[240px_1fr]">
      <OwnerSidebar />
      <section className="rounded-lg border border-chocolate/10 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Catalog manager</p>
        <h1 className="mt-2 text-4xl font-black text-ganache">Add cake</h1>
        <form className="mt-8 grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Cake name" />
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Price" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Category" />
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Servings" />
          </div>
          <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Image URL" />
          <textarea className="min-h-28 rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Cake description" />
          <div className="grid gap-4 md:grid-cols-3">
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Flavors" />
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Sizes" />
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Toppings" />
          </div>
          <button className="w-fit rounded-full bg-chocolate px-6 py-3 font-black text-cream" type="button">
            Save cake
          </button>
        </form>
      </section>
    </main>
  )
}

export default AddCake
