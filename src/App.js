import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Article from './Article';
import news from './news.json';
import './App.css';

function App() {
  

  return (
    <>
      <h1>Hello world</h1>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/artikkel/:articleId" element={<Article />} />
      </Routes>
    </>
  )
}

export default App;
