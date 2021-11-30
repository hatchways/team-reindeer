import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  boxButton: {
    textAlign: 'center',
    paddingTop: '10px',
  },
  typography: {
    color: '#000',
    fontWeight: 400,
    textTransform: 'uppercase',
  },
  inputLabel: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
}));

export default useStyles;
