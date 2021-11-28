import React from 'react';
import useStyles from './useStyles';
import { TextField, Button, Typography, Grid, Select, MenuItem } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  gender: '',
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('This field cannot be empty'),
  lastName: Yup.string().required('This field cannot be empty'),
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
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  Edit Profile
                </Typography>
              </Grid>
              <Grid item xs={3} style={{ marginTop: '30px' }}>
                <Typography variant="h6">First Name</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  className={classes.inputs}
                  label={<Typography className={classes.label}>John</Typography>}
                  type="text"
                  name="firstName"
                  helperText={touched.firstName ? errors.firstName : ''}
                  error={touched.firstName && Boolean(errors.firstName)}
                  value={values.firstName}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} style={{ marginTop: '30px' }}>
                <Typography variant="h6">Last Name</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  className={classes.inputs}
                  label={<Typography className={classes.label}>Doe</Typography>}
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} style={{ marginTop: '30px' }}>
                <Typography variant="h6">Gender</Typography>
              </Grid>
              <Select
                style={{ flex: 1 }}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={values.gender}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Grid></Grid>

              {/* <Box textAlign="center" className={classes.submitDiv}>
              <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
                save
              </Button>
            </Box> */}
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditForm;
