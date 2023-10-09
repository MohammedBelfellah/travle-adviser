import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/system';

export const useStyles = makeStyles((theme) => ({
    appBar: {
        height: '50px', 
    },
    title: {
        display: 'none',
        marginBottom: '5px !important',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    toolbar: {
        position:"static ! important",
        display: 'flex',
        justifyContent: 'space-between',
    },
    search: {
        position: 'relative',
        marginBottom: '10px !important',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.5),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.65),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        right: '0px',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
