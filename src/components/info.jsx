import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '250px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: 'none', // Remove default border
    outline: 'none', // Remove default outline
    transition: 'border 0.2s', // Add a transition for the border
};

const closeButtonStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    marginTop: '20px',
    background: '#ff9400',
};

export default function InfoModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={modalStyle}
                        // Apply border style when the modal is focused
                        css={{
                            '&:focus': {
                                border: '2px solid #000', // Add border style when focused
                            },
                        }}
                    >
                        <Typography style={{ color:"#ff9400"}} id="transition-modal-title" variant="h6" component="h2">
                            Welcome to Our Website
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Our search feature may not be available at the moment due to an issue with our API key. We apologize for any inconvenience.
                        </Typography>
                        <Button variant="contained" onClick={handleClose} style={closeButtonStyle}>
                            Close
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
