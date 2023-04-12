import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Promotions from "./pages/Promotions/Promotions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
