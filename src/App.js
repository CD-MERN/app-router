import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import CustomHello from './components/CustomHello';

function App() {
  return (
    <BrowserRouter>
      
        <Link to="/home">Home</Link>{" | "}
        <Link to="/number/4">Number</Link>{" | "}
        <Link to="/hello/message">Hello</Link>{" | "}
        <Link to="/hello/message/blue/red">Custom Hello</Link>
      
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/number/:number" element={<Number/>} />
        <Route path="/hello/:message" element={<Hello/>} />
        <Route path="/hello/:message/:color/:backgroundColor" element={<CustomHello/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
