// import {asyncStorageService} from './asyncStorageService.js';
import { storageService } from './storageService.js';
import { httpService } from './httpService'
// import axios from 'axios';


export const gigService = {
    query,
    getById,
    save,
    remove
}

var gGigs = require('../data/tenner.json')
const KEY = 'gigs'


async function query(filterBy) {
    // storageService.saveToStorage(KEY, gGigs)
    // const gigs = await httpService.get('gig')
    const gigs = await httpService.get('gig')
    const filterRegex = new RegExp(filterBy, 'i')
    if (!filterBy) return gigs
    return (gigs.filter(gig => filterRegex.test(gig.category)))
    // return gigs
    // if (!gGigs) return storageService.getFromStorage(KEY)
    //     .then((gigs) => {
    //         gGigs = gigs
    //         return gigs.gig
    //     });

};


function getById(gigId) {
    const gig = httpService.get(`gig/${gigId}`)
    return gig
};


function save(gigInfo) {
    console.log('gigInfo:', gigInfo)
    storageService.saveToStorage(KEY, gGigs)

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

