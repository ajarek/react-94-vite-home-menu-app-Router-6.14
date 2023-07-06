import { React, useContext } from 'react'
import { AppContext } from '../../App'
import { replaceElementInArray } from '../../helper/replaceElementInArray'
import { Form } from '../../helper/Form/Form'
import './MenuEdit.css'

const MenuEdit = () => {
  const {
    breakfasts,
    setBreakfasts,
    lunches,
    setLunches,
    dinners,
    setDinners,
  } = useContext(AppContext)
  const handleMenu = (data) => {
    if (data.dey === 'Poniedziałek' && data.meal === 'Śniadanie') {
      const newArray = replaceElementInArray(breakfasts, 0, data.text)
      setBreakfasts(newArray)
    } else if (data.dey === 'Wtorek' && data.meal === 'Śniadanie') {
      const newArray = replaceElementInArray(breakfasts, 1, data.text)
      setBreakfasts(newArray)
    } else if (data.dey === 'Środa' && data.meal === 'Śniadanie') {
      const newArray = replaceElementInArray(breakfasts, 2, data.text)
      setBreakfasts(newArray)
    } else if (data.dey === 'Czwartek' && data.meal === 'Śniadanie') {
      const newArray = replaceElementInArray(breakfasts, 3, data.text)
      setBreakfasts(newArray)
    } else if (data.dey === 'Piątek' && data.meal === 'Śniadanie') {
      const newArray = replaceElementInArray(breakfasts, 4, data.text)
      setBreakfasts(newArray)
    } else if (data.dey === 'Sobota' && data.meal === 'Śniadanie') {
      const newArray = replaceElementInArray(breakfasts, 5, data.text)
      setBreakfasts(newArray)
    } else if (data.dey === 'Niedziela' && data.meal === 'Śniadanie') {
      const newArray = replaceElementInArray(breakfasts, 6, data.text)
      setBreakfasts(newArray)
    } else if (data.dey === 'Poniedziałek' && data.meal === 'Obiad') {
      const newArray = replaceElementInArray(lunches, 0, data.text)
      setLunches(newArray)
    } else if (data.dey === 'Wtorek' && data.meal === 'Obiad') {
      const newArray = replaceElementInArray(lunches, 1, data.text)
      setLunches(newArray)
    } else if (data.dey === 'Środa' && data.meal === 'Obiad') {
      const newArray = replaceElementInArray(lunches, 2, data.text)
      setLunches(newArray)
    } else if (data.dey === 'Czwartek' && data.meal === 'Obiad') {
      const newArray = replaceElementInArray(lunches, 3, data.text)
      setLunches(newArray)
    } else if (data.dey === 'Piątek' && data.meal === 'Obiad') {
      const newArray = replaceElementInArray(lunches, 4, data.text)
      setLunches(newArray)
    } else if (data.dey === 'Sobota' && data.meal === 'Obiad') {
      const newArray = replaceElementInArray(lunches, 5, data.text)
      setLunches(newArray)
    } else if (data.dey === 'Niedziela' && data.meal === 'Obiad') {
      const newArray = replaceElementInArray(lunches, 6, data.text)
      setLunches(newArray)
    } else if (data.dey === 'Poniedziałek' && data.meal === 'Kolacja') {
      const newArray = replaceElementInArray(dinners, 0, data.text)
      setDinners(newArray)
    } else if (data.dey === 'Wtorek' && data.meal === 'Kolacja') {
      const newArray = replaceElementInArray(dinners, 1, data.text)
      setDinners(newArray)
    } else if (data.dey === 'Środa' && data.meal === 'Kolacja') {
      const newArray = replaceElementInArray(dinners, 2, data.text)
      setDinners(newArray)
    } else if (data.dey === 'Czwartek' && data.meal === 'Kolacja') {
      const newArray = replaceElementInArray(dinners, 3, data.text)
      setDinners(newArray)
    } else if (data.dey === 'Piątek' && data.meal === 'Kolacja') {
      const newArray = replaceElementInArray(dinners, 4, data.text)
      setDinners(newArray)
    } else if (data.dey === 'Sobota' && data.meal === 'Kolacja') {
      const newArray = replaceElementInArray(dinners, 5, data.text)
      setDinners(newArray)
    } else if (data.dey === 'Niedziela' && data.meal === 'Kolacja') {
      const newArray = replaceElementInArray(dinners, 6, data.text)
      setDinners(newArray)
    }
  }
  return (
    <div className='menu-edit'>
      <Form onSubmit={handleMenu} />
    </div>
  )
}

export default MenuEdit
