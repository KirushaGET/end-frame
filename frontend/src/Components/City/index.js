import * as React from 'react';

const CityInfo = (props) => {
  const {info} = props;
  const displayName = `${info.city}`;
  const population = `${info.population}`;
  const description = `${info.description}`;

  console.log(info.image);

  return (
    <div>
      <div>
        {displayName}
      </div>
      <hr />
      <div>
        Население: {population} человек
      </div>
      <div style={{width: "240px", marginBottom: '5px'}}>
        Особенности: {description}
      </div>
      <img width={240} src={info.image}/>
    </div>
  );
};

export default React.memo(CityInfo);
