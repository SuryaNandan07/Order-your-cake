function OrderTable({ orders }) {
  return (
    <div className="overflow-hidden rounded-lg border border-chocolate/10 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead className="bg-cream-strong text-xs font-black uppercase tracking-[0.16em] text-chocolate/60">
            <tr>
              <th className="px-5 py-4">Order</th>
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Cake</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Total</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-chocolate/10">
            {orders.map((order) => (
              <tr key={order.id} className="text-sm font-semibold text-cocoa/75">
                <td className="px-5 py-4 font-black text-ganache">{order.id}</td>
                <td className="px-5 py-4">{order.customer}</td>
                <td className="px-5 py-4">{order.cake}</td>
                <td className="px-5 py-4">{order.date}</td>
                <td className="px-5 py-4">Rs. {order.total}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-pink-soft px-3 py-1 text-xs font-black text-chocolate">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderTable
