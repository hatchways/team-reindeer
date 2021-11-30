import { TextField } from '@material-ui/core';
import { useField } from 'formik';

export const TextFieldWrapper = ({ name, ...otherProps }: any): JSX.Element => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return <TextField {...configTextfield} />;
};
