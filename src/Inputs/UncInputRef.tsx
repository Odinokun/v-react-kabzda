import { useRef, useState } from 'react';

export const UncInputRef = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSaveValue = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onSaveValue}>save value</button>
      <span> input's value is {value}</span>
    </div>
  );
};
