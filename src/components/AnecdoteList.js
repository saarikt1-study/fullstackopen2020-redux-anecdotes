import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { hideNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  
  const vote = (anecdote) => {
    const msg = `You voted for: '${anecdote.content}'`
    dispatch(showNotification(msg))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
    dispatch(voteForAnecdote(anecdote.id))
  }

  return (
    <div>
      {anecdotes
        .filter(anecdote => anecdote.content.includes(filter))
        .sort((a, b) => {
          return b.votes - a.votes
        })
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Anecdotes