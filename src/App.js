import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
