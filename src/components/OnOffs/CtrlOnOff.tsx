import { FC, CSSProperties } from 'react';

type PropsType = {
  isOn: boolean;
  setIsOnOffVal: (val: boolean) => void;
};

export const CtrlOnOff: FC<PropsType> = ({
  isOn,
  setIsOnOffVal,
  ...restProps
}) => {
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

  const onClickHandler = () => setIsOnOffVal(!isOn);

  return (
    <div style={wrapperStyle}>
      <span style={{ ...mainStyle, ...onStyle }} onClick={onClickHandler}>
        on
      </span>
      <span style={{ ...mainStyle, ...offStyle }} onClick={onClickHandler}>
        off
      </span>
      <span style={{ ...mainStyle, ...indicatorStyle }}></span>
    </div>
  );
};
