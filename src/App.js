import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import BarGraph from './pages/BarGraph';
import DummyGraph from './pages/DummyGraph';
import PerformanceGraph from './pages/PerformanceGraph';
import Pie from './pages/Pie';
import MapChart from './pages/MapChart';
import Dashboard from './pages/Dashboard';
import BubbleChart from './pages/BubbleChart';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className='container-fluid mb-4'>
        <div className='row bg-dark'>
          <div className='col-md-12'>
            <Link className="btn btn-warning mx-4 my-4 pull-left" to={'/dashboard'}>Dashboard</Link>
            <Link className="btn btn-secondary mx-4 my-4 pull-left" to={'/pie'}>Show Pie chart</Link>
            <Link className="btn btn-primary mx-4 my-4 pull-left" to={'/'}>Show Bar graph</Link>
            {/* <Link className="btn btn-primary mx-4 my-4 pull-left" to={'/bubble'}>Show Bubble graph</Link> */}
            <Link className="btn btn-info mx-4 my-4 pull-left" to={'/map'}>Show Maps</Link>
            <Link className="btn btn-danger mx-4 my-4 pull-left" to={'/demos'}>Demos</Link>
            <Link className="btn btn-success mx-4 my-4 pull-left" to={'/evaluate'}>Evaluations</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="map" element={<MapChart />} />
        <Route path="pie" element={<Pie />} />
        {/* <Route path="bubble" element={<BubbleChart />} /> */}
        <Route path="" element={<BarGraph />} />
        <Route path="demos" element={<DummyGraph />} />
        <Route path="evaluate" element={<PerformanceGraph />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
