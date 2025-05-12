import Header from '../../components/header/header';
import TownList from '../../components/towns/towns';
import { useAppSelector } from '../../hooks';
import { getCityName } from '../../store/slices/town/selectors';

export default function MainEmptyScreen () {
  const currentTown = useAppSelector(getCityName);

  return (
    <div className="page page--gray page--main" data-testid='main-empty-container'>
      <Header />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <TownList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">{`We could not find any property available at the moment in ${currentTown}`}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
