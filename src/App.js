import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import PopularProductDetails from "./pages/product details/PopularProductDetails";
import ProductDetails from "./pages/product details/ProductDetails";
import Payment from './pages/payment/Payment'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/Featured/:productId" element={<ProductDetails />} />
        <Route path="/details/popular/:productId" element={<PopularProductDetails/>} />
        <Route path="/payment/:productId" element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;