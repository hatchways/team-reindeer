import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useStyles from './useStyles';

interface Props {
  id?: string;
  username: string;
  description: string;
  photo: string;
  rating: number;
  location: string;
  price: number;
}

const Listing = ({ username, description, photo, rating, price, location }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Card sx={{ width: 250, maxWidth: 350, minHeight: 250 }} className={classes.profile}>
      <CardContent className={classes.profileInfo1}>
        <Avatar sx={{ width: 100, height: 100 }} alt="sitter photo" src={photo} />
        <Typography variant="h5">{username}</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.profileInfo2}>
        <Box display="flex" alignItems="center">
          <LocationOnIcon htmlColor="#f14140" />
          <Typography variant="body2" color="text.secondary">
            {location}
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
