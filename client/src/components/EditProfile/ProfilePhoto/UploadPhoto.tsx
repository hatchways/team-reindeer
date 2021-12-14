import React, { ChangeEvent, ImgHTMLAttributes, ReactNode, useRef, useState } from 'react';
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
  }),
);

const UploadPhoto: React.FC = (): JSX.Element => {
  const inputFile = useRef<HTMLInputElement>(null);
  const [fileInputState, setFileInputState] = useState<File | undefined>(undefined);

  const [previewSource, setPreviewSource] = useState<string | undefined>(undefined);

  const classes = useStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (!(e.target.files instanceof FileList)) return;

    const file = e.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (!reader.result) {
        setFileInputState(file);
      }
    };
  };

  return (
    <Box className={classes.root}>
      <form>
        <input
          ref={inputFile}
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleChange}
          required
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" size="large" color="primary" component="span">
            Upload
          </Button>
        </label>
      </form>
      {previewSource && <Avatar src={previewSource} alt="upload photo" />}
    </Box>
  );
};

export default UploadPhoto;
