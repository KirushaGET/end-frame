import * as React from 'react';
import { useState } from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import ControlPanel from '../MapControl';
import Pins from '../Pins';
import CityInfo from '../City';
import CITIES from '../City/cities.json';
import ReactAudioPlayer from 'react-audio-player';
import music from '../../audio/background-music.ogg';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

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

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
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
  });
  const [popupInfo, setPopupInfo] = useState(null);
  const [mapStyle, setMapStyle] = useState('');

  return (
    <>
      <ReactAudioPlayer
        src={music}
        autoPlay
      />
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapStyle}
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}

      >
        <Pins data={CITIES} onClick={setPopupInfo}/>

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo}/>
          </Popup>
        )}

        <GeolocateControl style={geolocateStyle}/>
        <FullscreenControl style={fullscreenControlStyle}/>
        <NavigationControl style={navStyle}/>
        <ScaleControl style={scaleControlStyle}/>
        <ControlPanel setMapStyle={setMapStyle}/>
      </MapGL>
    </>
  );
};

export default Map;
