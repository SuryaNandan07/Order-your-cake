import OrderTable from '../components/OrderTable'
import OwnerSidebar from '../components/OwnerSidebar'
import { ownerOrders } from '../data/cakes'

function OwnerOrders() {
  return (
    <main className="page-shell grid gap-6 py-10 lg:grid-cols-[240px_1fr]">
      <OwnerSidebar />
      <section>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Order queue</p>
        <h1 className="mt-2 text-4xl font-black text-ganache">Owner orders</h1>
        <div className="mt-8">
          <OrderTable orders={ownerOrders} />
        </div>
      </section>
    </main>
  )
}

export default OwnerOrders
