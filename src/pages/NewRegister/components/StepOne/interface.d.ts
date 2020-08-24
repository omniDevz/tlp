import { ChangeEvent } from 'react';

export interface StepOneProps {
  values: {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
  };
  handleChange: FunctionComponentElement;
}
export interface FormProps {
  background: string;
}
