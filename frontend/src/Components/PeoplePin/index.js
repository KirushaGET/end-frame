import * as React from 'react';
import { Marker, FlyToInterpolator } from 'react-map-gl';
import personMarker from '../../images/personMarker.png';

const SIZE = 60;

const PeoplePin = (props) => {
  const {data, onClick, setViewport} = props;

  return data.map((person, index) => (
    <Marker key={`marker-${index}`} longitude={person.longitude} latitude={person.latitude}
            onClick={() => setViewport(
              {
                latitude: person.latitude,
                longitude: person.longitude,
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
        onClick={() => onClick(person)}
        src={personMarker}
        alt="marker"
      />
    </Marker>
  ));
};

export default React.memo(PeoplePin);
