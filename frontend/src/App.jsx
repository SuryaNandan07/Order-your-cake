import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddCake from './pages/AddCake'
import BakeryDashboard from './pages/BakeryDashboard'
import CakeDetails from './pages/CakeDetails'
import CakeListing from './pages/CakeListing'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import OwnerOrders from './pages/OwnerOrders'
import Register from './pages/Register'
import CakeStudio from './pages/CakeStudio'
function App() {
  return (
    <>
    <div className="min-h-screen bg-cream text-cocoa">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cakes" element={<CakeListing />} />
        <Route path="/cakes/:id" element={<CakeDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/CakeStudio" element={<CakeStudio />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/owner" element={<BakeryDashboard />} />
        <Route path="/owner/add-cake" element={<AddCake />} />
        <Route path="/owner/orders" element={<OwnerOrders />} />
      </Routes>
    </div>
    </>
  )
}

export default App
