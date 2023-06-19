import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';


function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default App;
