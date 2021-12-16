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

  const avatarSrc = selectedImage && URL.createObjectURL(selectedImage);

  return (
    <Box className={classes.root}>
      <form>
        <Typography variant="h5" className={classes.typography}>
          Profile Photo
        </Typography>
        <input
          accept="image/*"
          className={classes.input}
          id="button"
          multiple
          type="file"
          onChange={imageChange}
          required
        />
        <Avatar src={avatarSrc} alt="Profile photo/avatar/thumbnail" className={classes.avatar} />
        <Typography variant="subtitle1" className={classes.typography}>
          Be sure to use a photo that clearly shows your face
        </Typography>
        <label htmlFor="button">
          <Button variant="outlined" size="large" color="primary" component="span" className={classes.button}>
            Upload a file from your device
          </Button>
        </label>
        <Button variant="contained" color="primary" className={classes.button} startIcon={<DeleteIcon />}>
          Delete photo
        </Button>
      </form>
    </Box>
  );
};

export default UploadPhoto;
