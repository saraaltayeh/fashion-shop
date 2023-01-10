import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
        <Navbar bg="dark" variant="dark">
          <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Fashion Shop</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        </header>
        <main>
          <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/Product/:slug" element={<ProductScreen/>}/>
        </Routes>
        </Container>
        </main>
        <footer className="text-center">All Rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
