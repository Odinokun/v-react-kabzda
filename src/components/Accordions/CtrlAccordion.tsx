import { FC } from 'react';

type CtrlAccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  setAccCollapsed: (val: boolean) => void;
};

export const CtrlAccordion: FC<CtrlAccordionPropsType> = ({
  titleValue,
  collapsed,
  setAccCollapsed,
  ...restProps
}) => {
  return (
    <div>
      <CtrlAccordionTitle
        title={titleValue}
        collapsed={collapsed}
        setAccCollapsed={setAccCollapsed}
      />
      {!collapsed ? <CtrlAccordionBody /> : null}
    </div>
  );
};

type CtrlAccordionTitlePropsType = {
  title: string;
  collapsed: boolean;
  setAccCollapsed: (val: boolean) => void;
};

const CtrlAccordionTitle: FC<CtrlAccordionTitlePropsType> = ({
  title,
  collapsed,
  setAccCollapsed,
  ...restProps
}) => {
  const onClickHandler = () => {
    setAccCollapsed(!collapsed);
  };
  return (
    <h4
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={onClickHandler}
    >
      {title}
    </h4>
  );
};

type CtrlAccordionBodyPropsType = {};

export const CtrlAccordionBody: FC<CtrlAccordionBodyPropsType> = () => {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
};
