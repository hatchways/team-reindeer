import React, { ChangeEvent, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Avatar, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      display: 'none',
    },
    avatar: {
      width: '300px',
      height: '320px',
    },
    button: {
      marginLeft: '30px',
      marginTop: '20px',
    },
    typography: {
      marginBottom: '30px',
    },
  }),
);

const UploadPhoto: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const [selectedImage, setSelectedImage] = useState<File>();

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <Typography variant="h5" className={classes.typography}>
          Profile Photo
        </Typography>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={imageChange}
          required
        />
        <label htmlFor="contained-button-file">
          {selectedImage ? (
            <Avatar src={URL.createObjectURL(selectedImage)} alt="Thumb" className={classes.avatar} />
          ) : (
            <Avatar className={classes.avatar} />
          )}
          <Button variant="outlined" size="large" color="primary" component="span" className={classes.button}>
            Upload a file from your device
          </Button>
        </label>
      </form>
    </Box>
  );
};

export default UploadPhoto;
