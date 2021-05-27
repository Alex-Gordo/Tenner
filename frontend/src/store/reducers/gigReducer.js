const initialState = {
  gigs: [],
}

export function gigReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_GIGS':
      return { ...state, gigs: action.gigs }
    case 'ADD_GIG':
      return { ...state, gigs: [...state.gigs, action.gig] }
    case 'REMOVE_GIG':
      return { ...state, gigs: state.gigs.filter(gig => gig._id !== action.gigId) }
    case 'UPDATE_GIG':
      return {
        ...state,
        gigs: state.gigs.map(gig =>
          gig._id === action.gig._id ? action.gig : gig
        )
      }
    default:
      return state
  }
}
