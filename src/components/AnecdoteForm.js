import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(createAnecdote(content))
    dispatch(setNotification(`You created: '${content}'`, 4))
  }

  return (
    <div>
      <h2>Create new</h2>
       <form onSubmit={addAnecdote}>
         <input name='anecdote' />
         <button type='submit'>create</button>
       </form>
    </div>
  )
}

export default AnecdoteForm