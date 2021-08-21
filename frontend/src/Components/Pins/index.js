import * as React from 'react';
import { Marker, FlyToInterpolator } from 'react-map-gl';
import observerMarker from '../../images/observerMarker.png';

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
        src={observerMarker}
        alt="marker"
      />
    </Marker>
  ));
};

export default React.memo(Pins);
