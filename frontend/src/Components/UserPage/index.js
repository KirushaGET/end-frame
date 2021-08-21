import react, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import userImg from '../../images/user/user.png';
import ModalWindow from '../ModalWindow';
import './style.scss';

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const user = {
    name: 'Ивановы', 
    openPlaces: '1', 
    description: 'нужна нянька на 2 часа в день', 
    date: '10 июня 2021г. - 20 июня 2021г.',
    legend: ' В нашем доме жил Петр Первый, моя бабушка - его нянька, у нас даже есть него носочки. А еще мы очень любим угощать местными блюдами с интересными названиями, которые вы нигде больше не попробуете, это наш домашний рецепт!'
  };
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
          <p>Необходимая помощь:  {user.description}</p>
          <p>Ориентировочные даты:  {user.date}</p>
          <p>{user.legend}</p>
        </div>
        <div className="button">
            <Button
              className="sign_in_btn"
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
            >
              Связаться
            </Button>
            <ModalWindow open={open} setOpen={setOpen} />
          </div>
      </div>
    </div>
  );
};

export default UserPage;
