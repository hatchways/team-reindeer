import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

interface Props {
  color: 'primary' | 'secondary' | 'inherit' | 'default';
  children?: React.ReactNode;
  onClick?: (values: any) => void;
  type: string;
  size: 'large' | 'medium' | 'small';
  variant: 'text' | 'contained' | 'outlined';
  className?: string;
  fullWidth?: boolean;
}

export const ButtonWrapper: React.FC<Props> = ({ color, size, variant, fullWidth, children }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <Button color={color} variant={variant} onClick={handleSubmit} size={size} fullWidth={fullWidth}>
      {children}
    </Button>
  );
};
