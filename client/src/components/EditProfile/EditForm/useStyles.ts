import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  welcome: {
    paddingBottom: 20,
  },
  label: {
    fontSize: 17,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  inputs: {
    margin: '1rem auto',
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
  },
  submitDiv: {
    marginTop: theme.spacing(5),
  },
  submit: {
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'none',
    margin: '0 auto',
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
}));

export default useStyles;
