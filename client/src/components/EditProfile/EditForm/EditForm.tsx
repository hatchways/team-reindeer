import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import Textfield from '../../FormsUI/Textfield';
import Select from '../../FormsUI/Select';
import DateTimePicker from '../../FormsUI/DateTimePicker';
import Button from '../../FormsUI/Button';

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

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  submit: {
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'none',
    margin: '0 auto',
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
}));

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
              <Typography variant="body1" style={{ color: '#000' }}>
                FIRST NAME
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="firstName" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                LAST NAME
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="lastName" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                GENDER
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Select name="gender" options={options} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                BIRTH DATE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <DateTimePicker name="birthDate" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                EMAIL ADDRESS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="email" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                PHONE NUMBER
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="phone" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                WHERE YOU LIVE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="address" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                DESCRIBE YOURSELF
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="message" multiline={true} rows={4} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Button
                fullWidth={false}
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default EditForm;
