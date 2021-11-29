import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Grid, Typography } from '@material-ui/core';

import Textfield from '../../FormsUI/Textfield';
import Select from '../../FormsUI/Select';
import DateTimePicker from '../../FormsUI/DateTimePicker';
import Button from '../../FormsUI/Button';
import useStyles from './useStyles';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  gender: '',
  birthDate: '',
  email: '',
  phone: '',
  address: '',
  message: '',
};

const FORM_VALIDATION = Yup.object().shape({
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
    <div>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
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
                FIRST NAME
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="firstName" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                LAST NAME
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="lastName" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                GENDER
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Select name="gender" options={options} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                BIRTH DATE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <DateTimePicker name="birthDate" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                EMAIL ADDRESS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="email" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                PHONE NUMBER
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="phone" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                WHERE YOU LIVE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="address" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" className={classes.typography}>
                DESCRIBE YOURSELF
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="message" multiline={true} rows={4} />
            </Grid>
          </Grid>
          <Box className={classes.boxButton}>
            <Button type="submit" size="large" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
};

export default EditForm;
