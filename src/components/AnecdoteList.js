import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  
  const vote = (anecdote) => {
    dispatch(setNotification(`You voted for: '${anecdote.content}'`, 4))
    
    const newVotes = anecdote.votes + 1
    const changedAnecdote = {
      ...anecdote,
      votes: newVotes
    }

    dispatch(voteForAnecdote(anecdote.id, changedAnecdote))
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