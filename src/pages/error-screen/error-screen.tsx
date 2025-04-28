import {useAppDispatch} from '../../hooks';
import { fetchOfferAction } from '../../store/api-actions';
import '../../css/error-screen.css';
import Image from '../../img/lost_connection.png';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className='outer_error_container' data-testid='error-container'>
      <img className='error_image' src={Image}/>
      <p className="error__text">Не удалось загрузить предложения</p>
      <button
        onClick={() => {
          dispatch(fetchOfferAction());
        }}
        className="replay replay--error"
        type="button"
      >
         Попробовать ещё раз
      </button>
    </div>
  );
}
