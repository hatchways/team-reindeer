import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      display: 'none',
    },
    avatar: {
      width: '300px',
      height: '320px',
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
