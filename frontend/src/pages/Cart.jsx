import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { cakes, cartItems } from '../data/cakes'

function Cart() {
  const rows = cartItems.map((item) => ({ item, cake: cakes.find((cake) => cake.id === item.id) }))
  const subtotal = rows.reduce((sum, row) => sum + row.cake.price * row.item.quantity, 0)

  return (
    <main className="page-shell grid gap-8 py-10 lg:grid-cols-[1fr_360px]">
      <section>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Your cart</p>
        <h1 className="mt-2 text-4xl font-black text-ganache">Ready for checkout</h1>
        <div className="mt-8 grid gap-4">
          {rows.map((row) => (
            <CartItem key={row.item.id} item={row.item} cake={row.cake} />
          ))}
        </div>
      </section>
      <aside className="h-fit rounded-lg border border-chocolate/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ganache">Order summary</h2>
        <div className="mt-5 grid gap-3 text-sm font-bold text-cocoa/70">
          <div className="flex justify-between"><span>Subtotal</span><span>Rs. {subtotal}</span></div>
          <div className="flex justify-between"><span>Delivery</span><span>Rs. 149</span></div>
          <div className="flex justify-between border-t border-chocolate/10 pt-3 text-lg font-black text-ganache">
            <span>Total</span><span>Rs. {subtotal + 149}</span>
          </div>
        </div>
        <Link to="/checkout" className="mt-6 block rounded-full bg-chocolate px-5 py-3 text-center font-black text-cream">
          Checkout
        </Link>
      </aside>
    </main>
  )
}

export default Cart
