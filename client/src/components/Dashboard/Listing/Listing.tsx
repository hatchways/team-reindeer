import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useStyles from './useStyles';

interface Props {
  id?: string;
  username: string;
  profession: string;
  description: string;
  photo: string;
  rating: number;
  location: string;
  rate: number;
}

const Listing = ({ username, profession, description, photo, rating, rate, location }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Card sx={{ width: 250, maxWidth: 350, minHeight: 250 }} className={classes.profile}>
      <CardContent className={classes.profileInfo1}>
        <Avatar sx={{ width: 100, height: 100 }} alt="sitter photo" src={photo} />
        <Typography variant="h5" fontWeight={900} color="text.secondary">
          {username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profession}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body2" color="text.secondary" fontWeight={700}>
          {description}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.profileInfo2}>
        <LocationOnIcon className={classes.icon} />
        <Typography variant="body1" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2" fontWeight={900} color="text.secondary">
          {`$${rate}/hr`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Listing;
