import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const changedAnecdote = action.data.newObject
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
        return action.data
    default:
      return state
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteForAnecdote = (id, newObject) => {
  return async dispatch => {
    await anecdoteService.update(id, newObject)
    dispatch({
      type: 'VOTE',
      data: { id, newObject }
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export default reducer