import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Fragrance from "./pages/Fragrance";
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fragrance" component={Fragrance} />
        <Route path="/makeup" component={Makeup} />
        <Route path="/skincare" component={Skincare} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
