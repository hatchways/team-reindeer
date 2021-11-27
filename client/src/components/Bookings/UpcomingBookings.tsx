import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import SettingsIcon from '@mui/icons-material/Settings';

const UpcomingBookings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.upcomingRoot}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Upcoming Bookings:
      </Typography>
      <Card className={classes.upcomings}>
        <Box display="flex" justifyContent="space-between">
          <CardContent>
            <Typography className={classes.pos} variant="h3">
              14 April 2020, 10-12 AM
            </Typography>
            <Box display="flex" alignItems="center">
              <AvatarDisplay />
              <Typography className={classes.clientName} variant="h3" gutterBottom>
                John Doe
              </Typography>
            </Box>
          </CardContent>
          <Box display="flex" flexDirection="column" alignItems="end" justifyContent="space-around">
            <SettingsIcon />
            <Typography className={classes.clientName} color="textSecondary" variant="h6" gutterBottom>
              Accepted
            </Typography>
          </Box>
        </Box>
      </Card>

      <Card className={classes.upcomings}>
        <Box display="flex" justifyContent="space-between">
          <CardContent>
            <Typography className={classes.pos} variant="h3">
              14 April 2020, 10-12 AM
            </Typography>
            <Box display="flex" alignItems="center">
              <AvatarDisplay />
              <Typography className={classes.clientName} variant="h3" gutterBottom>
                John Doe
              </Typography>
            </Box>
          </CardContent>
          <Box display="flex" flexDirection="column" alignItems="end" justifyContent="space-around">
            <SettingsIcon />
            <Typography className={classes.clientName} color="textSecondary" variant="h6" gutterBottom>
              Accepted
            </Typography>
          </Box>
        </Box>
      </Card>

      <Card className={classes.upcomings}>
        <Box display="flex" justifyContent="space-between">
          <CardContent>
            <Typography className={classes.pos} variant="h3">
              14 April 2020, 10-12 AM
            </Typography>
            <Box display="flex" alignItems="center">
              <AvatarDisplay />
              <Typography className={classes.clientName} variant="h3" gutterBottom>
                John Doe
              </Typography>
            </Box>
          </CardContent>
          <Box display="flex" flexDirection="column" alignItems="end" justifyContent="space-around">
            <SettingsIcon />
            <Typography className={classes.clientName} color="textSecondary" variant="h6" gutterBottom>
              Accepted
            </Typography>
          </Box>
        </Box>
      </Card>

      <Card className={classes.upcomings}>
        <Box display="flex" justifyContent="space-between">
          <CardContent>
            <Typography className={classes.pos} variant="h3">
              14 April 2020, 10-12 AM
            </Typography>
            <Box display="flex" alignItems="center">
              <AvatarDisplay />
              <Typography className={classes.clientName} variant="h3" gutterBottom>
                John Doe
              </Typography>
            </Box>
          </CardContent>
          <Box display="flex" flexDirection="column" alignItems="end" justifyContent="space-around">
            <SettingsIcon />
            <Typography className={classes.clientName} color="textSecondary" variant="h6" gutterBottom>
              Accepted
            </Typography>
          </Box>
        </Box>
      </Card>
    </Card>
  );
};

export default UpcomingBookings;
