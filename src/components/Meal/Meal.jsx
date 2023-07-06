import './Meal.css'

const Meal = ({ nameMeal, arr, nameClass }) => {
  return (
    <div className='wrapper-card-meal'>
      <div className='meal '>{nameMeal}</div>
      {arr.map((br, index) => {
        return (
          <div
            key={index}
            className={'card'}
          >
            {br}
          </div>
        )
      })}
    </div>
  )
}

export default Meal
