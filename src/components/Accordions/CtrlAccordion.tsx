import { FC } from 'react';

type CtrlAccordionPropsType = {
  title: string;
  collapsed: boolean;
  setAccCollapsed: (val: boolean) => void;
};

export const CtrlAccordion: FC<CtrlAccordionPropsType> = ({ title, collapsed, setAccCollapsed }) => {
  return (
    <div>
      <CtrlAccordionTitle title={title} collapsed={collapsed} setAccCollapsed={setAccCollapsed} />
      {!collapsed ? <CtrlAccordionBody /> : null}
    </div>
  );
};

type CtrlAccordionTitlePropsType = {
  title: string;
  collapsed: boolean;
  setAccCollapsed: (val: boolean) => void;
};

const CtrlAccordionTitle: FC<CtrlAccordionTitlePropsType> = ({ title, collapsed, setAccCollapsed }) => {
  const onClickHandler = () => {
    setAccCollapsed(!collapsed);
  };
  return (
    <h4 style={{ cursor: 'pointer', userSelect: 'none' }} onClick={onClickHandler}>
      {title}
    </h4>
  );
};

export const CtrlAccordionBody: FC = () => {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
};
