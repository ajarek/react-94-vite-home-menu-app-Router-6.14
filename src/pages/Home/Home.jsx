import Meal from '../../components/Meal/Meal'
import './Home.css'
const breakfasts=['zupa mleczna','jajka z majonezem',' kanapki z serem','zupa mleczna','parówki','jajecznica','zupa mleczna']
const lunches=['stek wieprzowy w sosie','spaghetti bolognese',' naleśniki z serem','zupa pomiod.','pulpety w sosie pomid.','grilowany filet w sosie śmiet.','panierowany filet drobiowy, frytki ']
const dinners=['kanapki z wędliną i serem, kiełbaski','kanapki z wędliną i serem, parówki',' kanapki z serem','kanapki z wędliną i serem, białe kiełbaski ','kanapki z wędliną i serem, parówki','burgery ','kanapki z wędliną i serem, parówki']
const Home = () => {

  return (
    <div className='home'>
      <h1>Tygodniowy Jadłospis domowy</h1>
      <div className='cards'>
        <div className='wrapper-card-header'>
          <div className='header'>Pon</div>
          <div className='header'>Wto</div>
          <div className='header'>Śro</div>
          <div className='header'>Czw</div>
          <div className='header'>Pią</div>
          <div className='header'>Sob</div>
          <div className='header'>Nie</div>
        </div>
        <Meal nameMeal={'Śniadanie'} arr={breakfasts} />
        <Meal nameMeal={'Obiad'} arr={lunches} />
        <Meal nameMeal={'Kolacja'} arr={dinners} />
        
      </div>
    </div>
  )
}

export default Home
