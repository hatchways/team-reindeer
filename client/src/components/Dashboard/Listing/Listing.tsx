import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useStyles from './useStyles';
import { Profile } from '../../../interface/Profile';

const Listing = ({ firstName, lastName, description, photo, price, address }: Profile): JSX.Element => {
  const classes = useStyles();
  return (
    <Card sx={{ width: 250, maxWidth: 350, minHeight: 250 }} className={classes.profile}>
      <CardContent className={classes.profileInfo1} sx={{ padding: '10px 30px' }}>
        <Avatar sx={{ width: 100, height: 100 }} alt="sitter photo" src={photo} />
        <Typography variant="h5">
          {firstName} {lastName}
        </Typography>
        <Rating name="read-only" value={4} readOnly />
        <Typography variant="subtitle2">{description}</Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.profileInfo2}>
        <Box display="flex" alignItems="center">
          <LocationOnIcon htmlColor="#f14140" />
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </Box>

        <Typography variant="body2" fontWeight={700}>
          {`$${price}/hr`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Listing;
