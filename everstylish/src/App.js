import './App.css';
import { Navbar } from './Components/Landing/Navbar';
import { Notch } from './Components/Landing/Notch';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Notch/>
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
