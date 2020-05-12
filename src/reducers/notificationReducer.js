const initialState = null

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'NOTIFICATION':
        return action.data.msg
      default:
        return state
    }
}

export const showNotification = (msg) => {
  return {
    type: 'NOTIFICATION',
    data: { msg }
  }
}

export const hideNotification = () => {
  return {
    type: 'NOTIFICATION',
    data: { msg: null }
  }
}

export default reducer