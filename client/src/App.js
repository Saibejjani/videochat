import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/test"
          element={<h1>Hello this is root router /test</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
