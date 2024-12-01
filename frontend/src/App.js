import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./ScrollToTop";
import backgroundImg_men from "./components/assets/backgroundImage_men.png";
import backgroundImg_women from "./components/assets/backgroundImage_women.png";
import backgroundImg_kids from "./components/assets/backgroundImage_kids.png";
import video_men from "./components/assets/video_men.mp4";
import video_women from "./components/assets/video_women.mp4";
import video_kids from "./components/assets/video_kids.mp4";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory backgroundImg = {backgroundImg_men} category="men" video={video_men} bgColor="#333533"/>} />
          <Route path="/women" element={<ShopCategory backgroundImg = {backgroundImg_women} category="women" video={video_women} />} />
          <Route path="/kids" element={<ShopCategory backgroundImg = {backgroundImg_kids}  category="kids" video={video_kids} bgColor="#f1f2f6"/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ >
  );
}

export default App;
