
import './App.scss';
import Home from "./Components/Home/home";
import Navbar from "./Components/NavBar/navbar";
import About from "./Components/About/about";
import Projects from './Components/Works/projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
