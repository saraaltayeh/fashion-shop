import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Fashion Shop</Link>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/Product/:slug" element={<ProductScreen/>}/>
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
