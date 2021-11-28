import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../../FormsUI/Textfield';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  gender: '',
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('This field cannot be empty'),
  lastName: Yup.string().required('This field cannot be empty'),
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
                First Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="firstName" label={<Typography className={classes.label}>John</Typography>} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" style={{ color: '#000' }}>
                Last Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Textfield name="lastName" label={<Typography className={classes.label}>Doe</Typography>} />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default EditForm;
