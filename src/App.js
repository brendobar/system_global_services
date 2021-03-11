import './App.css';
import NavigationBar from "./components/NavigationBar"
import Jumbo from "./components/Jumbo"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Jumbo/>
      <div className="Main">
        <Portfolio/>
        <About/>
        <Contact/>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
