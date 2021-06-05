const fs = require('fs')
const gGigs = require('../data/tenner.json')


export const gigService = {
    query,
    getById,
    save,
    remove
}

async function query(filterBy) {
    console.log('gGigs', gGigs);
    // storageService.saveToStorage(KEY, gGigs)
    // const gigs = await storageService.getFromStorage(KEY)
    // if (!filterBy) return Promise.resolve(gigs.gig)
    // if (!gGigs) return storageService.getFromStorage(KEY)
    //     .then((gigs) => {
    //         gGigs = gigs
    //         return gigs.gig
    //     });
    // const filterRegex = new RegExp(filterBy, 'i')
    // return Promise.resolve(gigs.gig.filter(gig => filterRegex.test(gig.category)))
};


function getById(gigId) {
    const gig = gGigs.gig.find(gig => gig._id === gigId);
    return Promise.resolve(gig)
};


function save(gigInfo) {
    console.log('gigInfo:', gigInfo)
    storageService.saveToStorage(KEY, gGigs)
};

function remove(gigId) {
    console.log('toyId:', gigId)
    const gigIndex = gGigs.findIndex(gig => gig._id === +gigId);
    gGigs.splice(gigIndex, 1);
    console.log('gigIndex:', gigIndex)
    return Promise.resolve();
}
