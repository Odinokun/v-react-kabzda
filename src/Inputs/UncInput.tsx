import { ChangeEvent, useState } from 'react';

export const UncInput = () => {
  const [value, setValue] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <input value={value} onChange={onInputChange} />
      <span> input's value is {value}</span>
    </div>
  );
};
