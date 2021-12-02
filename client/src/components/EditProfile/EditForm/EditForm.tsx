import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Box, Grid, Typography } from '@material-ui/core';

import { TextFieldWrapper as Textfield } from '../../FormsUI/Textfield';
import { SelectWrapper as Select } from '../../FormsUI/Select';
import { DateTimePicker } from '../../FormsUI/DateTimePicker';
import { ButtonWrapper as Button } from '../../FormsUI/Button';
import useStyles from './useStyles';

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
      dateOfBirth: Date;
      availability: [Date];
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
      dateOfBirth: Date;
      availability: [Date];
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
  availability: '',
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

  return (
    <Box>
      <Formik initialValues={initialFormState} validationSchema={formValidation} onSubmit={handleSubmit}>
        <Form>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Edit Profile
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                First Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="firstName" label={<Typography className={classes.inputLabel}>firstName</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                Last Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="lastName" label={<Typography className={classes.inputLabel}>lastName</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                Gender
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Select
                name="gender"
                options={options}
                label={<Typography className={classes.inputLabel}>gender</Typography>}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                Birth Date
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <DateTimePicker
                name="dateOfBirth"
                label={<Typography className={classes.inputLabel}>birthDate</Typography>}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                Email Address
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="email" label={<Typography className={classes.inputLabel}>email</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                Phone Number
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="phoneNumber" label={<Typography className={classes.inputLabel}>phone</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                Where You Live
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="address" label={<Typography className={classes.inputLabel}>address</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="textPrimary" className={classes.typography}>
                Describe Yourself
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield
                name="description"
                multiline={true}
                rows={4}
                label={<Typography className={classes.inputLabel}>description</Typography>}
              />
            </Grid>
          </Grid>
          <Box className={classes.boxButton}>
            <Button type="submit" size="large" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default EditForm;
