import {storageService} from './async-storage.service.js'
import axios from 'axios';

export const gigService = {
    query,
    getById,
    save,
    remove
}

var gGigs;
// // const BASE_URL = process.env.NODE_ENV === 'my-app/src/services/gigs.json'

function query() {
    // if (!filterBy) return Promise.resolve(gGigs)
    if (!gGigs) return storageService.query('gig')
        .then((gigs) => {
            gGigs = gigs
            console.log('gGigs:', gGigs)
            return gigs
        });
    else return Promise.resolve(gGigs)
};

function getById(gigId) {
    const gig = gGigs.find(gig => gig._id === +gigId);
    return Promise.resolve(gig)
};


function save(gigInfo) {
    console.log('gigInfo:', gigInfo)

    // if (gigInfo._id) {
    //     return axios.put(`${URL}/api/gig`, gigInfo).then(status => status.data);
    // } else {
    //     return axios.post(`${URL}/api/gig`, gigInfo).then(gig => gig.data);
    // };
};

function remove(gigId) {
    console.log('toyId:', gigId)
    const gigIndex = gGigs.findIndex(gig => gig._id === +gigId);
    gGigs.splice(gigIndex, 1);
    console.log('gigIndex:', gigIndex)
    return Promise.resolve();
    // gGigs.splice(gigId, 1)
    // return axios.delete(`${URL}/api/gig/${gigId}`).then(status => {
    //     return status.data;
    // })
}