import dayjs, { Dayjs } from 'dayjs';
import React from 'react';


type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type DateInputProps =
  & Omit<InputProps, 'type' | 'onChange' | 'value'>
  & { onChange?: (date: Dayjs | null) => void
      type: 'date' };

export const DateInput: React.FC<DateInputProps> = ({ onChange, ...other }) => {
  const reference = React.useRef<HTMLInputElement>(null);

  const handleChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();

      if ((onChange && reference.current)) {
        const date = reference.current.value
          ? dayjs(reference.current.value)
          : null;

        onChange(date);
      }
    },
    [onChange, reference]
  );

  return (
    <input
      className="w-full"
      ref={reference}
      onChange={handleChange}
      {...other} />
  );
};
