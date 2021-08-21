import * as React from 'react';
import { Marker, FlyToInterpolator } from 'react-map-gl';
import MarkerImg from './marker.png';

const SIZE = 40;

const Pins = (props) => {
  const { data, onClick, setViewport } = props;

  return data.map((city, index) => (
    <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude} 
    onClick={() => setViewport(
      {
        latitude: city.latitude, 
        longitude: city.longitude, 
        transitionInterpolator: new FlyToInterpolator({speed: 2}),
        transitionDuration: 'auto',
        zoom: 15,
        minZoom: 9,
        bearing: 0,
        pitch: 0,
        width: '100vw',
        height: '100vh',
      }
      )}
      >
      <img
        height={SIZE}
        style={{
          cursor: 'pointer',
          fill: '#d00',
          stroke: 'none',
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
        }}
        onClick={() => onClick(city)}
        src={MarkerImg}
        alt="marker"
      />
    </Marker>
  ));
};

export default React.memo(Pins);
