function CartItem({ item, cake }) {
  return (
    <div className="grid gap-4 rounded-lg border border-chocolate/10 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr_auto]">
      <img src={cake.image} alt={cake.name} className="h-28 w-full rounded-md object-cover sm:w-28" />
      <div>
        <h3 className="text-lg font-black text-ganache">{cake.name}</h3>
        <p className="mt-1 text-sm font-semibold text-chocolate/60">{cake.bakery}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold text-cocoa/70">
          <span className="rounded-full bg-cream-strong px-3 py-1">{item.selectedSize}</span>
          <span className="rounded-full bg-pink-soft px-3 py-1">Qty {item.quantity}</span>
          <span className="rounded-full bg-cream-strong px-3 py-1">{item.message}</span>
        </div>
      </div>
      <div className="text-left sm:text-right">
        <p className="text-xl font-black text-chocolate">Rs. {cake.price * item.quantity}</p>
        <button className="mt-3 rounded-full border border-chocolate/15 px-4 py-2 text-sm font-bold text-chocolate">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
