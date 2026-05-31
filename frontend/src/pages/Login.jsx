import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className="page-shell grid min-h-[calc(100vh-80px)] place-items-center py-12">
      <section className="w-full max-w-md rounded-lg border border-chocolate/10 bg-white p-8 shadow-xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-honey">Welcome back</p>
        <h1 className="mt-3 text-3xl font-black text-ganache">Login to OrderCake</h1>
        <form className="mt-8 grid gap-5">
          <label className="grid gap-2 text-sm font-black text-chocolate">
            Email
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3 outline-none focus:border-pink" type="email" placeholder="you@example.com" />
          </label>
          <label className="grid gap-2 text-sm font-black text-chocolate">
            Password
            <input className="rounded-md border border-chocolate/15 bg-cream px-4 py-3 outline-none focus:border-pink" type="password" placeholder="Enter password" />
          </label>
          <button className="rounded-full bg-chocolate px-5 py-3 font-black text-cream" type="button">
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm font-semibold text-cocoa/65">
          New here? <Link to="/register" className="font-black text-chocolate">Create an account</Link>
        </p>
      </section>
    </main>
  )
}

export default Login
