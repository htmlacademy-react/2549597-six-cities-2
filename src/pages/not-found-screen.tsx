import { Link } from 'react-router-dom';

export default function NotFoundScreen (): JSX.Element {
  return (
    <div>
      <div>
          «404 Not Found»
      </div>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
