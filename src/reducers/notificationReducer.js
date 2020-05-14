const initialState = null

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'NOTIFICATION':
        return action.data.msg
      default:
        return state
    }
}

let timer

export const setNotification = (msg, timeInSeconds) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      data: {
        msg
      }
    })
    
    clearTimeout(timer)
    timer = setTimeout(() => {
     dispatch({
       type: 'NOTIFICATION',
       data: { msg: null }
     }) 
    }, timeInSeconds * 1000)
  }
}

export default reducer