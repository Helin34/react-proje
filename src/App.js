import {
  BrowserRouter,

  Route,
  Routes,
} from "react-router-dom";
import MainPage
  from "./pages/MainPage";
import ProductsPage
  from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import getData, { günüHesapla, tlHesapla, } from './index.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/urunler
        " element={<ProductsPage />} />
        <Route path="/urun-detay/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
