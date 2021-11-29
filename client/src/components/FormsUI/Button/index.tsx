import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

interface Props {
  color: 'primary' | 'secondary' | 'inherit' | 'default';
  children?: React.ReactNode;
  onClick?: (values: any) => void;
  type: string;
  size: string;
  variant: 'text' | 'contained' | 'outlined';
  className: string;
  fullWidth: boolean;
}

const ButtonWrapper: React.FC<Props> = ({ onClick, color, size, variant, className, fullWidth, children }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  // const configButton = {
  //   variant: 'contained',
  //   color: 'primary',
  //   fullWidth: true,
  //   onClick: handleSubmit,
  // };

  return (
    <Button color={color} variant={variant} onClick={handleSubmit} size="large" fullWidth={fullWidth}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
