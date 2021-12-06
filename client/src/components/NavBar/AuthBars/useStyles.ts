import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  navButtons: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 40,
    '& > *': {
      margin: 10,
    },
  },
  typography: {
    color: '#000',
  },
  homeTypography: {
    color: '#fff',
  },
  link: { textDecoration: 'none' },
}));

export default useStyles;
