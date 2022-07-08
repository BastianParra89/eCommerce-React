import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input placeholder='Products Search' type="text" {...register('searchText')} />
      <button className='button'>Search</button>
    </form>
  )
}

export default InputSearch