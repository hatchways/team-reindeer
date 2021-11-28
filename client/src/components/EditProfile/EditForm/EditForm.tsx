import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import Textfield from '../../FormsUI/Textfield';
import Select from '../../FormsUI/Select';
import DateTimePicker from '../../FormsUI/DateTimePicker';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  gender: '',
  birthDate: '',
  email: '',
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('This field cannot be empty'),
  lastName: Yup.string().required('This field cannot be empty'),
  gender: Yup.string().required('This field cannot be empty'),
  birthDate: Yup.date().required('This field cannot be empty'),
  email: Yup.string().email('Invalid email.').required('This field cannot be empty'),
});

const useStyles = makeStyles({
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
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
                EMAIL
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="email" />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default EditForm;
