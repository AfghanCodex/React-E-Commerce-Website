import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { useState } from "react";

function App() {
  const [cart, setCard] = useState([]);

  return (
    <div className="App">
      <Header cart={cart} />

      <Products cart={cart} setCart={setCard} />
      <Footer />
    </div>
  );
}

export default App;
