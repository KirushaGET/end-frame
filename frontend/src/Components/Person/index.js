import * as React from 'react';

const Person = (props) => {
  const {info} = props;
  const displayName = `${info.name}`;
  const displayAge = `${info.age}`;
  const description = `${info.description}`;

  return (
    <div>
      <div>
        {displayName}
      </div>
      <div>
        {displayAge}
      </div>
      <hr/>
      <div style={{width: '240px', marginBottom: '5px'}}>
        Описание: {description}
      </div>
      <img width={240} src={info.image}/>
    </div>
  );
};

export default React.memo(Person);
