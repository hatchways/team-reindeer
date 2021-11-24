import Button from '@material-ui/core/Button';
import login from '../../helpers/APICalls/login';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';

export default function Demo(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const email = 'lukmanbioku@gmail.com';

  const password = '1234567';
  const handleClick = (email: string, password: string) => {
    login(email, password).then((data) => {
      if (data.error) {
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });
      }
    });
  };
  return (
    <Button
      type="button"
      size="large"
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick={() => {
        handleClick(email, password);
      }}
    >
      Demo User
    </Button>
  );
}
