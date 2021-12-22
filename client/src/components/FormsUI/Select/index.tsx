/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SelectWrapper = ({ name, options, ...otherProps }: any): JSX.Element => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {options.map((item: any, pos: any) => {
        return (
          <MenuItem key={pos} value={item}>
            {item}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
