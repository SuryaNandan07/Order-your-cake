import OwnerSidebar from '../components/OwnerSidebar'
import OrderTable from '../components/OrderTable'
import StatsCard from '../components/StatsCard'
import { cakes, ownerOrders } from '../data/cakes'

function BakeryDashboard() {
  return (
    <main className="page-shell grid gap-6 py-10 lg:grid-cols-[240px_1fr]">
      <OwnerSidebar />
      <section>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Owner workspace</p>
        <h1 className="mt-2 text-4xl font-black text-ganache">Bakery dashboard</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <StatsCard label="Active cakes" value={cakes.length} helper="Listed in customer catalog" />
          <StatsCard label="Open orders" value={ownerOrders.length} helper="Awaiting bakery action" />
          <StatsCard label="Revenue" value="Rs. 7.3k" helper="Dummy monthly preview" />
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-black text-ganache">Recent orders</h2>
          <OrderTable orders={ownerOrders.slice(0, 3)} />
        </div>
      </section>
    </main>
  )
}

export default BakeryDashboard
