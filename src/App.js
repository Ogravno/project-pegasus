import { Routes, Route } from 'react-router-dom';
import Map from './Map';
import Article from './Article';
import news from './news.json';
import './App.css';
import hamburgerMeny from './hamburger-meny.png'
import user from './user.png'



function App() {
  

  return (
    <>
    <div className='header'>
        <div className='left'>
          <h1>VG Map</h1>
        </div>

      <div className='fill'></div>
       <div className='right1'>
          <h2>Kjøp VG+</h2>
       </div>

        <div className='right2'>
          <img className='pic1' src={hamburgerMeny} alt="text"/>
       </div>

       <div className='right3'>
         <img className='pic' src={user} alt="text"/>
       </div>
    </div>

    <div className='content'>
      <Routes>
         <Route path="/" element={<Map />} />
         <Route path="/artikkel/:articleId" element={<Article />} />
       </Routes>
    </div>
    </>
  )
}

export default App;
