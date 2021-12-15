import React, { ChangeEvent, useState } from 'react';
import { Avatar, Box, IconButton, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './useStyles';

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
        <label htmlFor="outlined-button-file">
          {selectedImage ? (
            <Avatar src={URL.createObjectURL(selectedImage)} alt="Thumb" className={classes.avatar} />
          ) : (
            <Avatar className={classes.avatar} />
          )}
          <Typography variant="subtitle1" className={classes.typography}>
            Be sure to use a photo that clearly show your face
          </Typography>
          <Button variant="outlined" size="large" color="primary" component="span" className={classes.button}>
            Upload a file from your device
          </Button>
          <Box>
            <IconButton aria-label="delete" className={classes.iconButton}>
              <DeleteIcon fontSize="large" />
              <Typography variant="subtitle1">Delete photo</Typography>
            </IconButton>
          </Box>
        </label>
      </form>
    </Box>
  );
};

export default UploadPhoto;
