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
            console.log('GIG IN ACTION', savedGig)
            dispatch({ type: gig._id ? 'UPDATE_GIG' : 'ADD_GIG', gig: savedGig })
        } catch (err) {
            console.log(`Gigs Actions: err in ${gig._id ? 'update gig' : 'add gig'}${err}`)
        }
    }
}

export function onRemoveGig(gigId) {
    return async dispatch => {
        try {
            await gigService.remove(gigId)
            dispatch({ type: 'REMOVE_GIG', gigId: gigId })
        } catch (err) {
            console.log('Gigs Actions: err in removeGig', err)
        }
    }
}
