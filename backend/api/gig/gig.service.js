const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('gig')
        // const reviews = await collection.find(criteria).toArray()
        const gigs = await collection.find().toArray()
        console.log(gigs)
        return gigs
    } catch (err) {
        logger.error('cannot find gigs', err)
        throw err
    }

}

async function remove(gigId) {
    try {
        const collection = await dbService.getCollection('gig');
        await collection.deleteOne({ _id: ObjectId(gigId) });
    } catch (err) {
        console.log(`cannot remove gig ${gigId}`, err);
        throw err;
    }
}


async function save(gig) {
    let savedGig;
    if (gig._id) {
        // db.customer.updateOne({ "_id": ObjectId("579c6ecab87b4b49be12664c") }, { $set: { balance: 20 } }
        //UPDATE
        try {
            savedGig = {
                ...gig,
                _id: ObjectId(gig._id),
                updatedAt: Date.now(),
            };
            const collection = await dbService.getCollection('gig');
            await collection.updateOne({ _id: savedGig._id }, { $set: savedGig });
            return savedGig;
        } catch (err) {
            logger.error('cannot update gig', err);
            throw err;
        }
    } else {
        // CREATE
        try {
            savedGig = { ...gig };
            savedGig.createdAt = Date.now();
            const collection = await dbService.getCollection('gig');
            await collection.insertOne(savedGig);
            return savedGig;
        } catch (err) {
            logger.error('cannot add gig', err);
            throw err;
        }
    }
}


// async function add(review) {
//     try {
//         // peek only updatable fields!
//         const reviewToAdd = {
//             byUserId: ObjectId(review.byUserId),
//             aboutUserId: ObjectId(review.aboutUserId),
//             txt: review.txt
//         }
//         const collection = await dbService.getCollection('review')
//         await collection.insertOne(reviewToAdd)
//         return reviewToAdd;
//     } catch (err) {
//         logger.error('cannot insert review', err)
//         throw err
//     }
// }

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

async function getById(gigId) {
    try {
        const collection = await dbService.getCollection('gig');
        const gig = await collection.findOne({ _id: ObjectId(gigId) });
        return gig;
    } catch (err) {
        console.log(`while finding gig ${gigId}`, err);
        throw err;
    }
}


module.exports = {
    query,
    remove,
    save,
    getById
}


