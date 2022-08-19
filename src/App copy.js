import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import BarGraph from './pages/BarGraph';
import PieChart from './pages/PieChart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="BarGraph" element={<BarGraph />} />
        <Route path="" element={<BarGraph />} />
      </Routes>
    </div>
  );
}

export default App;
