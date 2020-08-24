import { ChangeEvent } from 'react';

export interface StepOneProps {
  values: {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    'one',
    'home' | 'two'
  );
}
export interface FormProps {
  background: string;
}
