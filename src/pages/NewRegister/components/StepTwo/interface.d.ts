import { ChangeEvent } from 'react';

export interface StepTwoProps {
  values: {
    username: string;
    password: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    'two',
    'one' | 'term'
  );
}
export interface FormProps {
  background: string;
}
