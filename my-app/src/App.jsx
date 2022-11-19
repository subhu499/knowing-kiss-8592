import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ProductDescription } from "./components/ProductDescription";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Products } from "./components/Products";
import { Input } from "./components/Input";
import { Footer } from "./components/Footer";
import { PrivateRouter } from "./components/PrivateRouter";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/products/:id"
          element={
            <PrivateRouter>
              {" "}
              <ProductDescription />
            </PrivateRouter>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/input" element={<Input />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
