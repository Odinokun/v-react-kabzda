import { FC, useState } from 'react';

type UncAccordionPropsType = {
  titleValue: string;
};

export const UncAccordion: FC<UncAccordionPropsType> = ({
  titleValue,
  ...restProps
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div>
      <UncAccordionTitle
        title={titleValue}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      {!collapsed ? <UncAccordionBody /> : null}
    </div>
  );
};

type UncAccordionTitlePropsType = {
  title: string;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const UncAccordionTitle: FC<UncAccordionTitlePropsType> = ({
  title,
  collapsed,
  setCollapsed,
  ...restProps
}) => {
  const onToggleHandler = () => setCollapsed(!collapsed);

  return (
    <h4
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={onToggleHandler}
    >
      {title}
    </h4>
  );
};

type UncAccordionBodyPropsType = {};

export const UncAccordionBody: FC<UncAccordionBodyPropsType> = () => {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
};
