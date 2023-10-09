import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2), minWidth: 120, marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        padding: '15px 5px 0px 5px',

    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '60vh', overflow: 'auto',marginTop:"15px !important"
    },
    select: {
        width: "100px"
    },
    title: {
        background: "red",
    },
}));