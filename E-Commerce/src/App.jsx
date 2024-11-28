import { Route ,Routes} from "react-router-dom";
import Header from './header/Header'
import Home from "./pages/home/Home";
import Shop from './pages/shop/shop'
import Brand from "./pages/Brand";
import NewArrivals from "./pages/NewArrivals";
import OnSale from "./pages/OnSale";
import Footer from "./footer/footer";
import Details from "./pages/product deatails/Details"
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/shop' element={<Shop />} />
    <Route path='/brand' element={<Brand />} />
    <Route path='/new arrivals' element={<NewArrivals />} />
    <Route path='/on sale' element={<OnSale />} />
    <Route path='/product/:id' element={<Details />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
