import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import ProductDetails from "./pages/product details/ProductDetails";
import Payment from './pages/payment/Payment'
import Gift from "./pages/gift/Gift";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/payment/:productId" element={<Payment/>}/>
        <Route path="/gift/:productId" element={<Gift/>}/>
      </Routes>
    </div>
  );
}

export default App;