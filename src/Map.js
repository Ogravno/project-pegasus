import news from './news.json'

function Map() {
  return (
    <div className='app'>
      {news.map(item => (
        <div>{item.title}</div>
      ))}
    </div>
  )
}

export default Map;
