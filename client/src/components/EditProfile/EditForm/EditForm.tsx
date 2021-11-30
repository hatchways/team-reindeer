import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Grid, Typography } from '@material-ui/core';

import Textfield from '../../FormsUI/Textfield';
import Select from '../../FormsUI/Select';
import DateTimePicker from '../../FormsUI/DateTimePicker';
import Button from '../../FormsUI/Button';
import useStyles from './useStyles';

const initial_form_state = {
  firstName: '',
  lastName: '',
  gender: '',
  birthDate: '',
  email: '',
  phone: '',
  address: '',
  message: '',
};

const form_validation = Yup.object().shape({
  firstName: Yup.string().required('This field cannot be empty'),
  lastName: Yup.string().required('This field cannot be empty'),
  gender: Yup.string().required('This field cannot be empty'),
  birthDate: Yup.date().required('This field cannot be empty'),
  email: Yup.string().email('Invalid email.').required('This field cannot be empty'),
  phone: Yup.number().integer().typeError('Please enter a valid phone number').required('This field cannot be empty'),
  address: Yup.string().required('Required'),
  message: Yup.string(),
});

const EditForm = (): JSX.Element => {
  const classes = useStyles();
  const options = ['Male', 'Female', 'Other'];

  return (
    <Box>
      <Formik
        initialValues={{
          ...initial_form_state,
        }}
        validationSchema={form_validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Edit Profile
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                First Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="firstName" label={<Typography className={classes.label}>firstName</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                Last Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="lastName" label={<Typography className={classes.label}>lastName</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                Gender
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Select
                name="gender"
                options={options}
                label={<Typography className={classes.label}>gender</Typography>}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                Birth Date
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <DateTimePicker name="birthDate" label={<Typography className={classes.label}>birthDate</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                Email Address
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="email" label={<Typography className={classes.label}>email</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                Phone Number
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="phone" label={<Typography className={classes.label}>phone</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                Where You Live
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="address" label={<Typography className={classes.label}>address</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                Describe Yourself
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield
                name="message"
                multiline={true}
                rows={4}
                label={<Typography className={classes.label}>about you</Typography>}
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
