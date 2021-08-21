import * as React from 'react';
import { Marker } from 'react-map-gl';
import MarkerImg from './marker.png';

const SIZE = 40;

const Pins = (props) => {
  const {data, onClick} = props;

  return data.map((city, index) => (
    <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
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
