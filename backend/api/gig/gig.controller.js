const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const socketService = require('../../services/socket.service')
const gigService = require('./gig.service')

async function getGigs(req, res) {
    try {
        const gigs = await gigService.query()
        res.send(gigs)
    } catch (err) {
        logger.error('Cannot get gigs', err)
        res.status(500).send({ err: 'Failed to get gigs' })
    }
}

async function deleteGig(req, res) {
    try {
        await gigService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete gig', err)
        res.status(500).send({ err: 'Failed to delete gig' })
    }
}


async function addGig(req, res) {
    try {
        var gig = req.body
        gig.byUserId = req.session.user._id
        gig = await gigService.add(gig)

        // prepare the updated review for sending out
        gig.byUser = await userService.getById(gig.byUserId)
        gig.aboutUser = await userService.getById(gig.aboutUserId)

        console.log('CTRL SessionId:', req.sessionID);
        socketService.broadcast({ type: 'gig-added', data: gig })
        socketService.emitToAll({ type: 'user-updated', data: gig.byUser, room: req.session.user._id })
        res.send(gig)

    } catch (err) {
        console.log(err)
        logger.error('Failed to add gig', err)
        res.status(500).send({ err: 'Failed to add gig' })
    }
}

async function getGig(req, res) {
    try {
        const gig = await gigService.getById(req.params.id);
        res.send(gig);
    } catch (err) {
        logger.error('Failed to get gig', err);
        res.status(500).send({ err: 'Failed to get gig' });
    }
}


module.exports = {
    getGigs,
    deleteGig,
    addGig,
    getGig
}