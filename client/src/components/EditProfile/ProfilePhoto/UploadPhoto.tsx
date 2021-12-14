import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { Form, Formik } from 'formik';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);

const UploadPhoto = (): JSX.Element => {
  const [file, setFile] = useState(null);
  const classes = useStyles();

  const handleChange = (files: any) => {
    // setFile(files[0]);
    console.log(files[0]);
  };

  return (
    <Box className={classes.root}>
      <Formik initialValues={{ file: '' }} onSubmit={(values) => console.log(values)}>
        {() => (
          <Form>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => handleChange(e.target.files)}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" size="large" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UploadPhoto;
