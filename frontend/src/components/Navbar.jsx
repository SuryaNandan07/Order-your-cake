import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/cakes', label: 'Cakes' },
  { to: '/cart', label: 'Cart' },
  { to: '/owner', label: 'Owner' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-chocolate/10 bg-cream/95 backdrop-blur">
      <nav className="page-shell flex min-h-20 items-center justify-between gap-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-chocolate text-lg font-black text-cream">
            OC
          </span>
          <span>
            <span className="block text-lg font-black tracking-wide text-ganache">OrderCake</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-chocolate/60">
              Premium bakery
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-chocolate/10 bg-white/60 p-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive ? 'bg-chocolate text-cream' : 'text-chocolate/70 hover:bg-pink-soft'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="rounded-full border border-chocolate/15 px-4 py-2 text-sm font-bold text-chocolate hover:bg-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-pink px-4 py-2 text-sm font-black text-ganache shadow-sm hover:bg-pink-soft"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
