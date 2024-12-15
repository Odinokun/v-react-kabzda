import { FC, useReducer } from 'react';
import { reducer, TOGGLE_COLLAPSED } from './reducer';

type UncAccordionPropsType = {
  title: string;
};

export const UncAccordion: FC<UncAccordionPropsType> = ({ title }) => {
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  const dispatchHandler = () => dispatch({ type: TOGGLE_COLLAPSED });

  return (
    <div>
      <h4 style={{ cursor: 'pointer' }} onClick={dispatchHandler}>
        {title}
      </h4>
      {!state.collapsed ? <UncAccordionBody /> : null}
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
