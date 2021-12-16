import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiButton-label': {
        textTransform: 'none',
      },
    },
    input: {
      display: 'none',
    },
    avatar: {
      width: '10rem',
      height: '10rem',
    },
    button: {
      marginLeft: '30px',
      marginTop: '20px',
    },
    typography: {
      margin: theme.spacing(1),
    },
    iconButton: {
      marginLeft: '80px',
    },
  }),
);

export default useStyles;
