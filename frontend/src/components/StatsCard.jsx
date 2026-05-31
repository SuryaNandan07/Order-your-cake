function StatsCard({ label, value, helper }) {
  return (
    <div className="rounded-lg border border-chocolate/10 bg-white p-5 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-chocolate/50">{label}</p>
      <p className="mt-3 text-3xl font-black text-ganache">{value}</p>
      <p className="mt-2 text-sm font-semibold text-cocoa/60">{helper}</p>
    </div>
  )
}

export default StatsCard
