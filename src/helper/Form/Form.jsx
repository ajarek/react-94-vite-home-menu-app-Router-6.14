import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './Form.css'
import { useEffect } from 'react'
export const Form = ({ onSubmit }) => {
  const schema = yup.object().shape({
    dey: yup.string().required(),
    meal: yup.string().required(),
    text: yup.string().min(3).max(35).required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        // dey: '',
        // meal: '',
        text: '',
      })
    }
  }, [formState, reset])

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='wrapper-input'>
        <label htmlFor='email'>Dzień Tygodnia</label>
        <select
          {...register('dey')}
          className='select'
        >
          <option value='Poniedziałek'>Poniedziałek</option>
          <option value='Wtorek'>Wtorek</option>
          <option value='Środa'>Środa</option>
          <option value='Czwartek'>Czwartek</option>
          <option value='Piątek'>Piątek</option>
          <option value='Sobota'>Sobota</option>
          <option value='Niedziela'>Niedziela</option>
        </select>
        <p>{errors?.dey?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='email'>Posiłek</label>
        <select
          {...register('meal')}
          className='select'
        >
          <option value='Śniadanie'>Śniadanie</option>
          <option value='Obiad'>Obiad</option>
          <option value='Kolacja'>Kolacja</option>
        </select>
        <p>{errors?.meal?.message}</p>
      </div>

      <div className='wrapper-input'>
        <label htmlFor='email'>Zaplanuj posiłek</label>
        <textarea {...register('text')} />
        <p>{errors.text?.message}</p>
      </div>

      <div className='wrapper-input'>
        <input
          type='submit'
          value='🖊️ Zapisz do Menu'
        />
      </div>
    </form>
  )
}
