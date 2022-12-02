import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Article from './Article';
import './App.css';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/artikkel/:articleId" element={<Article />} />
    </Routes>
  )
}

export default App;
