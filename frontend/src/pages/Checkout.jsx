function Checkout() {
  return (
    <main className="page-shell grid gap-8 py-10 lg:grid-cols-[1fr_360px]">
      <section className="rounded-lg border border-chocolate/10 bg-white p-6 shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Checkout</p>
        <h1 className="mt-2 text-4xl font-black text-ganache">Delivery details</h1>
        <form className="mt-8 grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Full name" />
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Phone number" />
          </div>
          <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Delivery address" />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Delivery date" />
            <select className="rounded-md border border-chocolate/15 bg-cream px-4 py-3">
              <option>Morning slot</option>
              <option>Afternoon slot</option>
              <option>Evening slot</option>
            </select>
          </div>
          <textarea className="min-h-28 rounded-md border border-chocolate/15 bg-cream px-4 py-3" placeholder="Delivery notes" />
          <button className="rounded-full bg-chocolate px-5 py-3 font-black text-cream" type="button">
            Place order
          </button>
        </form>
      </section>
      <aside className="h-fit rounded-lg bg-ganache p-6 text-cream shadow-xl">
        <h2 className="text-2xl font-black">Payment preview</h2>
        <p className="mt-3 text-cream/70">No payment gateway or backend is connected yet. This screen is UI-only.</p>
        <div className="mt-6 grid gap-3 font-bold">
          <div className="flex justify-between"><span>Cakes</span><span>Rs. 5097</span></div>
          <div className="flex justify-between"><span>Delivery</span><span>Rs. 149</span></div>
          <div className="flex justify-between border-t border-cream/20 pt-3 text-xl font-black"><span>Total</span><span>Rs. 5246</span></div>
        </div>
      </aside>
    </main>
  )
}

export default Checkout
