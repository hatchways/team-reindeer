import React, { ChangeEvent, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Avatar, Box } from '@material-ui/core';

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
    avatar: {
      width: '300px',
      height: '300px',
    },
    button: {
      marginLeft: '100px',
      marginTop: '10px',
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
          {selectedImage && <Avatar src={URL.createObjectURL(selectedImage)} alt="Thumb" className={classes.avatar} />}
          <Button variant="contained" size="large" color="primary" component="span" className={classes.button}>
            Upload
          </Button>
        </label>
      </form>
    </Box>
  );
};

export default UploadPhoto;
