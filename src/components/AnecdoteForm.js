import React from 'react'
import { useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>create new</h2>
       <form>
         <div><input /></div>
         <button>create</button>
       </form>
    </div>
  )
}

export default AnecdoteForm