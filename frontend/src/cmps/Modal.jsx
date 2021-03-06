import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { LoginSignUp } from './LoginSignUp';

export function NewModal() {
    return (
        <SimpleModal />
    )
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [pageMode, setPageMode] = React.useState('');

    const handleOpenSignIn = () => {
        setPageMode('login')
        setOpen(true);
    };
    const handleOpenJoin = () => {
        setPageMode('join')
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <LoginSignUp handleClose={handleClose} pageMode={pageMode} />
        </div>
    );

    return (
        <div>
            <button className="sign-in-btn" type="button" onClick={handleOpenSignIn}>
                Sign In
            </button>
            <button className="join-btn" type="button" onClick={handleOpenJoin}>
                Join
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
    );
}
