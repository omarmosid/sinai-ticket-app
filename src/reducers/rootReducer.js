export default function(state, action) {
  switch(action.type) {
    case 'LOGIN':
      return {...state, isLoggedIn: true}
    case 'LOGOUT':
      return {...state, isLoggedIn: false}
    case 'GET_TICKETS':
      return {
        ...state,
        tickets: [
          ...action.payload
        ]
      }
    case 'ADD_TICKET':
      return {
        ...state,
        tickets: [
          ...action.payload
        ]
      }
    case 'CLOSE_TICKET':
      console.log(action.payload.id);
      return {
        ...state,
        tickets: state.tickets.map(ticket => {
          if(ticket.id === action.payload) {
            return (
              ticket.status === 'CLOSED'
            )
          } else {
            return ticket
          }
        })
      }
    case 'GET_USERS':
      return {
        ...state,
        users: [
          ...action.payload
        ]
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}