import "./styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./navbar";
import Intro from "./intro"
import About from "./about"
import Standings from "./standings"
import Schedule from "./schedule"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Intro/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/standings" element={<Standings/>}></Route>
          <Route exact path="/schedule" element={<Schedule/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
