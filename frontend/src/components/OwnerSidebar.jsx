import { NavLink } from 'react-router-dom'

const ownerLinks = [
  { to: '/owner', label: 'Dashboard' },
  { to: '/owner/add-cake', label: 'Add cake' },
  { to: '/owner/orders', label: 'Orders' },
]

function OwnerSidebar() {
  return (
    <aside className="rounded-lg border border-chocolate/10 bg-white p-4 shadow-sm">
      <p className="px-3 text-xs font-black uppercase tracking-[0.2em] text-chocolate/50">Bakery owner</p>
      <div className="mt-4 grid gap-2">
        {ownerLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/owner'}
            className={({ isActive }) =>
              `rounded-md px-4 py-3 text-sm font-black ${
                isActive ? 'bg-chocolate text-cream' : 'text-chocolate/70 hover:bg-pink-soft'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default OwnerSidebar
