import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { Avatar, Box, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './useStyles';

const UploadPhoto: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const [selectedImage, setSelectedImage] = useState<File | undefined>();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setSelectedImage(fileList[0]);
    }
  };

  const uploadImage = function () {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('file', selectedImage);
    }
  };

  const avatarSrc = selectedImage && URL.createObjectURL(selectedImage);

  return (
    <Box className={classes.root} component="form">
      <Typography variant="h5" className={classes.typography}>
        Profile Photo
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="button"
        multiple
        type="file"
        onChange={handleImageChange}
        required
      />
      <Avatar src={avatarSrc} alt="Profile photo" className={classes.avatar} />
      <Typography variant="subtitle1" className={classes.typography}>
        Be sure to use a photo that clearly shows your face
      </Typography>
      <label htmlFor="button">
        <Button
          variant="outlined"
          size="large"
          color="primary"
          component="span"
          className={classes.button}
          onClick={uploadImage}
        >
          Upload a file from your device
        </Button>
      </label>
      <Button variant="text" className={classes.button} startIcon={<DeleteIcon />}>
        Delete photo
      </Button>
    </Box>
  );
};

export default UploadPhoto;
