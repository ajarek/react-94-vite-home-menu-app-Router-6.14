import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import Meal from '../../components/Meal/Meal'
import './Menu.css'

const Menu = () => {
  const { breakfasts,setBreakfasts,lunches,setLunches,dinners,setDinners } = useContext(AppContext)
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

export default Menu
