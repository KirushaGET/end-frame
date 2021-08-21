import * as React from 'react';
import {useEffect} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE from './map-style-basic-v8.json';

const defaultMapStyle = fromJS(MAP_STYLE);
const defaultLayers = defaultMapStyle.get('layers');

const categories = ['labels', 'roads', 'buildings', 'parks', 'water', 'background'];

// Layer id patterns by category
const layerSelector = {
  background: /background/,
  water: /water/,
  parks: /park/,
  buildings: /building/,
  roads: /bridge|road|tunnel/,
  labels: /label|place|poi/
};

// Layer color class by type
const colorClass = {
  line: 'line-color',
  fill: 'fill-color',
  background: 'background-color',
  symbol: 'text-color'
};

function getMapStyle({visibility, color}) {
  const layers = defaultLayers
    .filter(layer => {
      const id = layer.get('id');
      return categories.every(name => visibility[name] || !layerSelector[name].test(id));
    })
    .map(layer => {
      const id = layer.get('id');
      const type = layer.get('type');
      const category = categories.find(name => layerSelector[name].test(id));
      if (category && colorClass[type]) {
        return layer.setIn(['paint', colorClass[type]], color[category]);
      }
      return layer;
    });

  return defaultMapStyle.set('layers', layers);
}

const StyleControls = ({setMapStyle}) => {
  const visibility = {
    water: true,
    parks: true,
    buildings: true,
    roads: true,
    labels: true,
    background: true
  };

  const color = {
    water: '#65CAF6',
    parks: '#8ac2a8',
    buildings: '#c0c0c8',
    roads: 'darkgoldenrod',
    labels: '#392929',
    background: 'seashell'
  };

  useEffect(() => {
    setMapStyle(getMapStyle({visibility, color}));
  }, [visibility, color]);


  return (
    <div />
  );
}

export default React.memo(StyleControls);
