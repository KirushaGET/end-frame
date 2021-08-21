import { useHistory } from 'react-router-dom';
import placeAudio from '../../audio/placeAudio.ogg';
import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './style.scss';
import ReactAudioPlayer from 'react-audio-player';

const PlacePage = () => {
  const place = {
    name: 'Великий Новгород',
    population: '219 850 человек',
    description: 'Новгородский кремль (Детинец) был заложен, согласно летописи, князем Владимиром Ярославичем в 1044 году. Первоначально он занимал меньшую площадь, чем сейчас, его укрепления были построены из дерева и земли. Впоследствии крепость расширили, в XIV-XV веках вместо деревянных возвели каменные укрепления. Существующие в настоящее время стены и башни построены на прежней основе в конце XV века по распоряжению великого князя Ивана III. Впоследствии некоторые башни и участки стен перестраивались, ремонтировались и реставрировались. Из двенадцати первоначальных башен до наших дней дошли девять. В настоящее время протяжённость стен кремля составляет около полутора километров, занимаемая крепостью площадь – чуть более 12 гектаров. В 1992 году ансамбль Новгородского кремля, включающий оборонительные сооружения и внутренние постройки, стал объектом Всемирного культурного наследия ЮНЕСКО.',
    audio: 'place.wav',
  };
  const history = useHistory();

  return (
    <div className="main-container">
      <img
        src="https://image.flaticon.com/icons/png/512/93/93634.png"
        alt="back"
        className="back-img"
        onClick={() => history.push('/map')}
      />
      <div className="image-and-rating">
        <img 
          src="https://darsik.com/wp-content/uploads/2020/07/main___velikiy_novgorod___shutterstock_1377600905-1.oxzmu6aa5eja-1024x576.jpg"
          alt="placeLogo"
        />
        <Box component="fieldset" borderColor="transparent">
          <span className='rating'>Рейтинг:</span> 
          <Rating name="read-only" value={5} readOnly />
        </Box>
      </div>
      <div className="body">
        <div className="content">
          <p>Название места: {place.name}</p>
          <p>Население: {place.population}</p>
          <p>Особенности: {place.description}</p>
          <ReactAudioPlayer
            src={placeAudio}
            controls
            style={{margin: '1rem 0'}}
          />
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
