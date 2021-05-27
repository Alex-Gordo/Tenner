import { gigService } from '../../services/gigService'

export function loadGigs(filterBy = {
    keyword: '',
    description: '',
    category: '',
    features: '',
    sortBy: '',
}) {
    return async dispatch => {
        try {
            const gigs = await gigService.query(filterBy)
            dispatch({ type: 'SET_GIGS', gigs })
        } catch (err) {
            console.log('GigsActions: err in loadGigs', err)
        }
    }
}

export function onSaveGig(gig) {
    return async dispatch => {
        try {
            const savedGig = await gigService.save(gig)
            console.log('TOY IN ACTION', savedGig)
            dispatch({ type: gig._id ? 'UPDATE_TOY' : 'ADD_TOY', toy: savedGig })
        } catch (err) {
            console.log(`ToysActions: err in ${gig._id ? 'update toy' : 'add toy'}${err}`)
        }
    }
}