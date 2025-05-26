// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToDoApp from './projects/ToDoApp';
import WeatherDashboard from './projects/WeatherDashboard';
import CalculatorApp from './projects/CalculatorApp';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoApp />} />
        <Route path="/weather" element={<WeatherDashboard />} />
        <Route path="/calculator" element={<CalculatorApp />} />
      </Routes>
    </>
  );
}

export default App;
