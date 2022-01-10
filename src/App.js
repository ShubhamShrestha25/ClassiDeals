import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import ProductDetails from "./pages/product details/ProductDetails";
import Payment from './pages/payment/Payment'
import Test from "./pages/Test";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/payment/:productId" element={<Payment/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;