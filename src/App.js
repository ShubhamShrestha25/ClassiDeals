import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/products/product details/ProductDetails';
import Homepage from './pages/homepage/HomePage';

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
