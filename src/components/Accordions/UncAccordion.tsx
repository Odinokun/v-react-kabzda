import { FC, useReducer } from 'react';
import { reducer, TOGGLE_CONSTANT } from './reducer';

type UncAccordionPropsType = {
  title: string;
};

export const UncAccordion: FC<UncAccordionPropsType> = ({ title }) => {
  const [collapsed, dispatch] = useReducer(reducer, false);

  const dispatchHandler = () => dispatch({ type: TOGGLE_CONSTANT });

  return (
    <div>
      <h4 style={{ cursor: 'pointer' }} onClick={dispatchHandler}>
        {title}
      </h4>
      {!collapsed ? <UncAccordionBody /> : null}
    </div>
  );
};

export const UncAccordionBody: FC = () => {
  return (
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
};
