import { FC, CSSProperties, useState } from 'react';

type PropsType = {
  onChange: (val: boolean) => void;
};

export const UncOnOff: FC<PropsType> = ({ onChange, ...restProps }) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const onChangeHandler = () => {
    setIsOn(!isOn);
    onChange(true);
  };
  const offChangeHandler = () => {
    setIsOn(!isOn);
    onChange(false);
  };

  const wrapperStyle: CSSProperties = {
    display: 'flex',
  };
  const mainStyle: CSSProperties = {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid #000',
    cursor: 'pointer',
    userSelect: 'none',
  };
  const onStyle: CSSProperties = {
    backgroundColor: isOn ? 'green' : 'white',
  };
  const offStyle: CSSProperties = {
    backgroundColor: !isOn ? 'tomato' : 'white',
  };
  const indicatorStyle: CSSProperties = {
    borderRadius: '50%',
    marginLeft: '10px',
    pointerEvents: 'none',
    backgroundColor: isOn ? 'green' : 'tomato',
  };

  return (
    <div style={wrapperStyle}>
      <span style={{ ...mainStyle, ...onStyle }} onClick={onChangeHandler}>
        on
      </span>
      <span style={{ ...mainStyle, ...offStyle }} onClick={offChangeHandler}>
        off
      </span>
      <span style={{ ...mainStyle, ...indicatorStyle }}></span>
    </div>
  );
};
