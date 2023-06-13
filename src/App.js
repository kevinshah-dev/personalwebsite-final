import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';


function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default App;
