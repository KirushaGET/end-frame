import * as React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import userImg from '../../images/user/user.png';
import './style.scss';

const UserPage = () => {
  const user = {name: 'Ивановы', openPlaces: '1', description: 'Нужна нянька на 2 часа в день', date: '10 июня 2021г. - 20июня 2021г.'};
  const history = useHistory();

  return (
    <div className='main-container'>
      <img
        src="https://image.flaticon.com/icons/png/512/93/93634.png"
        alt="back"
        className="back-img"
        onClick={() => history.push('/map')}
      />
      <img src="https://www.psychologos.ru/images/articles/showcases/497sdt9f.jpg" alt="userLogo"/>
      <div className="body">
        <div className="content">
          <p>Семья: {user.name}</p>
          <p>Количество свободных мест: {user.openPlaces}</p>
          <p>Описание:  {user.description} лет</p>
          <p>Ориентировочные даты:  {user.date}</p>
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
