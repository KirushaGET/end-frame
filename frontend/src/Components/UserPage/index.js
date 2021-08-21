import * as React from 'react';
import { Button } from '@material-ui/core';
import userImg from '../../images/user/user.png';
import './style.scss';

const UserPage = () => {
  const user = {name: 'Иван', secondName: 'Иванов', age: '30', profession: 'Слесарь'};
  return (
    <div className='main-container'>
      <img src={userImg} alt="userLogo"/>
      <div className="body">
        <div className="content">
          <p>Имя: {user.name}</p>
          <p>Фамилия: {user.secondName}</p>
          <p>Возвраст:  {user.age} лет</p>
          <p>Профессия:  {user.profession}</p>
        </div>
        <div className="button"> 
            <Button
              className="sign_in_btn"
              variant="contained"
              color="primary"
            >
              Связаться
            </Button>
          </div>
      </div>
    </div>
  );
};

export default UserPage;
