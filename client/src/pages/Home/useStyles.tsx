import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    border: '1px solid black',
    // marginTop: '100px',
  },
  findDogSitter: {
    border: '1px solid black',
  },
  banner: {
    minHeight: '400px',
    border: '1px solid black',
  },
  image: {
    maxWidth: '100%',
  },
}));

export default useStyles;
