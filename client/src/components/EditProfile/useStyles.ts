import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 224,
    position: 'relative',
  },
  tabs: {
    borderRight: 1,
    borderColor: 'divider',
  },
  tabComponents: {
    marginTop: theme.spacing(15),
    flexGrow: 2,
  },
}));

export default useStyles;
