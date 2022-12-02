import { useState } from 'react';
import Mapbox, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom';
import collisionIcon from './collision.webp';
import newsIcon from './vg-logo.png';
import 'mapbox-gl/dist/mapbox-gl.css'
import news from './news.json'

function Map() {
  const [currentArticle, setCurrentArticle] = useState(null);

  return (
    <div>
      <Mapbox 
        style={{ height: '100vh' }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 10.75,
          latitude: 59.92,
          zoom: 13,
        }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        {news.map(item => (
          <Marker
            longitude={item.mapPosition.long}
            latitude={item.mapPosition.lat}
          >
            {item.type === 'collision' ? (
              <Link to={`/artikkel/${item.articleId}`}>
                <img src={collisionIcon} height={36} width={36} />
              </Link>
            ) : (
              <Link to={`/artikkel/${item.articleId}`}>
                <img src={newsIcon} height={36} width={36} />
              </Link>
            )}
          </Marker>
        ))}
      </Mapbox>
    </div>
  )
}

export default Map;
