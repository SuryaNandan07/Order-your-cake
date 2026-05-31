import { Link } from 'react-router-dom'

function Register() {
  return (
    <main className="page-shell grid min-h-[calc(100vh-80px)] place-items-center py-12">
      <section className="w-full max-w-2xl rounded-lg border border-chocolate/10 bg-white p-8 shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Join the bakery club</p>
        <h1 className="mt-3 text-3xl font-black text-ganache">Create your account</h1>
        <form className="mt-8 grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-chocolate">
              Full name
              <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3 outline-none focus:border-pink" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-black text-chocolate">
              Email
              <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3 outline-none focus:border-pink" type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-black text-chocolate">
            Password
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3 outline-none focus:border-pink" type="password" placeholder="Create password" />
          </label>
          <div>
            <p className="text-sm font-black text-chocolate">Select role</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {['Customer', 'Bakery Owner'].map((role) => (
                <label key={role} className="flex cursor-pointer items-center gap-3 rounded-lg border border-chocolate/15 bg-cream p-4 font-black text-chocolate">
                  <input type="radio" name="role" defaultChecked={role === 'Customer'} />
                  {role}
                </label>
              ))}
            </div>
          </div>
          <button className="rounded-full bg-chocolate px-5 py-3 font-black text-cream" type="button">
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm font-semibold text-cocoa/65">
          Already registered? <Link to="/login" className="font-black text-chocolate">Login</Link>
        </p>
      </section>
    </main>
  )
}

export default Register
