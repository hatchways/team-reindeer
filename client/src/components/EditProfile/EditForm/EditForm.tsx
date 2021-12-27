import { useState } from 'react';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import * as Yup from 'yup';
import { Box, FormControlLabel, Grid, Typography } from '@material-ui/core';
import { TextFieldWrapper as Textfield } from '../../FormsUI/Textfield';
import { SelectWrapper as Select } from '../../FormsUI/Select';
import { DateTimePicker } from '../../FormsUI/DateTimePicker';
import { ButtonWrapper as Button } from '../../FormsUI/Button';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import useStyles from './useStyles';
import FormGroup from '@material-ui/core/FormGroup';

interface Props {
  handleSubmit: (
    {
      firstName,
      lastName,
      description,
      gender,
      email,
      address,
      phoneNumber,
      dateOfBirth,
      availability,
      photo,
    }: {
      firstName: string;
      lastName: string;
      description: string;
      gender: string;
      email: string;
      address: string;
      phoneNumber: string;
      dateOfBirth: string;
      availability: string[];
      photo: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      description: string;
      gender: string;
      email: string;
      address: string;
      phoneNumber: string;
      dateOfBirth: string;
      availability: string[];
      photo: string;
    }>,
  ) => void;
}

const initialFormState = {
  firstName: '',
  lastName: '',
  description: '',
  gender: '',
  email: '',
  address: '',
  phoneNumber: '',
  dateOfBirth: '',
  availability: ['Monday'],
  photo: '',
};

const formValidation = Yup.object().shape({
  firstName: Yup.string().required('This field cannot be empty'),
  lastName: Yup.string().required('This field cannot be empty'),
  gender: Yup.string().required('This field cannot be empty'),
  dateOfBirth: Yup.date().required('This field cannot be empty'),
  email: Yup.string().email('Invalid email.').required('This field cannot be empty'),
  phoneNumber: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('This field cannot be empty'),
  address: Yup.string().required('Required'),
  description: Yup.string(),
});

const EditForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();
  const options = ['Male', 'Female', 'Other'];
  const [isAvailable, setIsAvailable] = useState(false);

  const daysOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAvailable(event.target.checked);
  };

  return (
    <Box>
      <Formik initialValues={initialFormState} validationSchema={formValidation} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Edit Profile
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  {isAvailable ? `I 'm available` : `I 'm not available`}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Switch color="error" onChange={handleSwitch} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Availability
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormGroup>
                  <Box display="flex" flexWrap="wrap">
                    {daysOptions.map((day, i) => (
                      <div key={i}>
                        {isAvailable ? (
                          <>
                            <Field type="checkbox" name="availability" label={day} value={day} as={Checkbox} />
                            <label>{day}</label>
                          </>
                        ) : (
                          <FormControlLabel name="availability" control={<Checkbox disabled />} label={day} />
                        )}
                      </div>
                    ))}
                  </Box>
                </FormGroup>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  First Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Textfield name="firstName" placeholder="firstName" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Textfield name="lastName" placeholder="lastName" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Gender
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Select name="gender" options={options} placeholder="gender" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Birth Date
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <DateTimePicker name="dateOfBirth" placeholder="birthDate" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Email Address
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Textfield name="email" placeholder="email" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Phone Number
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Textfield name="phoneNumber" placeholder="phoneNumber" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Where You Live
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Textfield name="address" placeholder="address" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" color="textPrimary" className={classes.typography}>
                  Describe Yourself
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Textfield name="description" multiline={true} rows={4} placeholder="description" />
              </Grid>
            </Grid>
            <Box className={classes.boxButton}>
              <Button type="submit" size="large" variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EditForm;
