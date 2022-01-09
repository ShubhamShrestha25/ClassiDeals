import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import ProductDetails from "./pages/product details/ProductDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;