import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Muzzle from "./pages/Muzzle";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Delivery from "./pages/Deliverypage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Muzzle" element={<Muzzle />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;