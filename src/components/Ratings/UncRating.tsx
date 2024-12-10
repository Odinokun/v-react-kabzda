import { FC, useState } from 'react';

type PropsType = {};

export const UncRating: FC<PropsType> = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Star selected={value > 0} value={1} setValue={setValue} />
      <Star selected={value > 1} value={2} setValue={setValue} />
      <Star selected={value > 2} value={3} setValue={setValue} />
      <Star selected={value > 3} value={4} setValue={setValue} />
      <Star selected={value > 4} value={5} setValue={setValue} />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  value: 1 | 2 | 3 | 4 | 5;
  setValue: (value: number) => void;
};

const Star: FC<StarPropsType> = ({
  selected,
  value,
  setValue,
  ...restProps
}) => {
  const onClickHandler = () => setValue(value);

  return (
    <span
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={onClickHandler}
    >
      {selected ? <b>star </b> : 'star '}
    </span>
  );
};
