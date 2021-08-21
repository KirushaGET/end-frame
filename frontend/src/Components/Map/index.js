import * as React from 'react';
import { useState } from 'react';
import MapGL, {
  Popup,
  FullscreenControl,
  GeolocateControl, FlyToInterpolator
} from 'react-map-gl';
import ControlPanel from '../MapControl';
import Pins from '../Pins';
import CityInfo from '../City';
import CITIES from '../City/cities.json';
import PEOPLE from '../Person/people.json';
import ReactAudioPlayer from 'react-audio-player';
import music from '../../audio/background-music.ogg';
import PeoplePin from '../PeoplePin';
import Person from '../Person';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 58.5213,
    longitude: 31.271,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: '100vw',
    height: '100vh',
    transitionInterpolator: new FlyToInterpolator({speed: 2}),
    transitionDuration: 'auto'
  });
  const [popupInfo, setPopupInfo] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [mapStyle, setMapStyle] = useState('');

  return (
    <>
      {/*<ReactAudioPlayer*/}
      {/*  src={music}*/}
      {/*  autoPlay*/}
      {/*/>*/}
      <MapGL
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={CITIES} onClick={setPopupInfo} setViewport={setViewport}/>
        <PeoplePin data={PEOPLE} onClick={setPersonInfo} setViewport={setViewport}/>

        {popupInfo && (
          <Popup
            anchor="top"
            style={{fontSize: '30px'}}
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo}/>
          </Popup>
        )}

        {personInfo && (
          <Popup
            anchor="top"
            style={{fontSize: '30px'}}
            longitude={personInfo.longitude}
            latitude={personInfo.latitude}
            closeOnClick={false}
            onClose={setPersonInfo}
          >
            <Person info={personInfo}/>
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle}/>
        <FullscreenControl style={fullscreenControlStyle}/>
        <ControlPanel setMapStyle={setMapStyle}/>
      </MapGL>
    </>
  );
};

export default Map;
