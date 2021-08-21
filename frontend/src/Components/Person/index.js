import * as React from 'react';
import "./personStyle.scss"
import { Link } from 'react-router-dom';

const Person = (props) => {
  const {info} = props;
  const displayName = `${info.name}`;
  const displayAge = `${info.age}`;
  const description = `${info.description}`;

  return (
    <div>
      <div style={{display: "flex"}}>
        <p className="person-text">{displayName}, {displayAge} </p>
      </div>
      <hr/>
      <div style={{width: '240px', marginBottom: '5px'}}>
        <p className="person-text">Описание: {description}</p>
      </div>
      <img width={240} src={info.image} alt="user"/>
      <div>
        <Link className="person-details-btn"  to="/user/1">Подробнее</Link>
      </div>
    </div>
  );
};

export default React.memo(Person);
