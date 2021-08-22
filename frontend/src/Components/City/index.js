import * as React from 'react';
import { Link } from 'react-router-dom';
import "./placeStyle.scss"

const CityInfo = (props) => {
  const {info} = props;
  const displayName = `${info.city}`;
  const population = `${info.population}`;
  const description = `${info.description}`;

  return (
    <div>
      <div>
        <p className="place-text">{displayName}</p>
      </div>
      <hr />
      <div>
        <p className="place-text">Население: {population} человек</p>
      </div>
      <div style={{width: "240px", marginBottom: '5px'}}>
        <p className="place-text">Особенности: {description}</p>
      </div>
      <img width={240} src={info.image} alt="city"/>
      <div>
        <Link className="place-details-btn"  to="/place/1">Подробнее</Link>
      </div>
    </div>
  );
};

export default React.memo(CityInfo);
