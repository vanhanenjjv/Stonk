import React from 'react';

import { DateInput, DateInputProps } from './DateInput';
import { DateRangeInput, DateRangeInputProps } from './DateRange';
import { FileInput, FileInputProps } from './FileInput';


export type InputProps =
  | DateInputProps
  | FileInputProps
  | DateRangeInputProps;

export const Input: React.FC<InputProps> = props => {
  switch (props.type) {
  case 'date':       return <DateInput {...props} />;
  case 'file':       return <FileInput {...props} />;
  case 'date-range': return <DateRangeInput {...props} />;
  }
};
