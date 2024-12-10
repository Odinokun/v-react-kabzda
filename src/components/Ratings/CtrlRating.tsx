import { FC } from 'react';
import { RatingValueType } from '../../App';

type PropsType = {
  value: RatingValueType;
  setRatingValue: (value: RatingValueType) => void;
};

export const CtrlRating: FC<PropsType> = ({
  value,
  setRatingValue,
  ...restProps
}) => {
  return (
    <div>
      <Star selected={value > 0} value={1} setRatingValue={setRatingValue} />
      <Star selected={value > 1} value={2} setRatingValue={setRatingValue} />
      <Star selected={value > 2} value={3} setRatingValue={setRatingValue} />
      <Star selected={value > 3} value={4} setRatingValue={setRatingValue} />
      <Star selected={value > 4} value={5} setRatingValue={setRatingValue} />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  value: RatingValueType;
  setRatingValue: (value: RatingValueType) => void;
};

const Star: FC<StarPropsType> = ({
  selected,
  value,
  setRatingValue,
  ...restProps
}) => {
  const onClickHandler = () => {
    setRatingValue(value);
  };
  return (
    <span
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={onClickHandler}
    >
      {selected ? <b>star </b> : 'star '}
    </span>
  );
};
