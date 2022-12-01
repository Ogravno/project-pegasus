import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import './App.css';

function App() {
  

  return (
    <>
      <h1>Hello world</h1>
      <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
    </>
  )
}

export default App;
