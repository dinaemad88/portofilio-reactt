
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { createHashRouter } from 'react-router-dom';

function App() {
  const routes = createHashRouter
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App