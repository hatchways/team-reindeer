import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appbar: {
    maxHeight: 100,
    boxShadow: '1px 2px 2px 1px rgba(0,0,0,0.19)',
    background: '#fff',
    zIndex: 9999,
  },
  homeAppbar: {
    background: 'transparent',
    boxShadow: 'none',
    maxHeight: 100,
    zIndex: 9999,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  homeToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  link: { textDecoration: 'none' },
}));

export default useStyles;
