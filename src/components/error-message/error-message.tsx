import { useAppSelector } from '../../hooks';
import { getCurrentError } from '../../store/reducer';
import '../../css/error-message.css';

export default function ErrorMessage() {
  const error = useAppSelector(getCurrentError);

  return(error ? <div className='error-message'>{error}</div> : null);
}
