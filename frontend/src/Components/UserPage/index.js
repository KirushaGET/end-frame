import react, { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from 'react-router-dom';
import ModalWindow from '../ModalWindow';
import './style.scss';

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const user = {
    name: 'Ивановы',
    openPlaces: '1',
    description: 'нужна нянька на 2 часа в день',
    date: '1 сентября 2021г. - 10 сентября 2021г.',
    legend: ' В нашем доме жил Петр Первый, моя бабушка - его нянька, у нас даже есть его носочки. А еще мы очень любим угощать местными блюдами с интересными названиями, которые вы нигде больше не попробуете, это наш домашний рецепт!'
  };
  const history = useHistory();

  return (
    <div className="main-container-user">
      <img
        src="https://image.flaticon.com/icons/png/512/93/93634.png"
        alt="back"
        className="back-img"
        onClick={() => history.push('/map')}
      />
      <div className="image-and-rating">
        <img src="https://www.psychologos.ru/images/articles/showcases/497sdt9f.jpg" alt="userLogo"/>
        <Box className='rating-box' component="fieldset" mb={3} borderColor="transparent">
          <span className='rating'>Рейтинг:</span>
          <Rating name="read-only" value={5} readOnly />
        </Box>
      </div>
      <div className="body">
        <div className="content">
          <p>Семья: {user.name}</p>
          <p>Количество свободных мест: {user.openPlaces}</p>
          <p>Необходимая помощь: {user.description}</p>
          <p>Ориентировочные даты: {user.date}</p>
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
          <ModalWindow open={open} setOpen={setOpen}/>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
