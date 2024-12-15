import { FC, useReducer } from 'react';

type UncAccordionPropsType = {
  title: string;
};

type ActionType = {
  type: string;
};

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      return !state;
    default:
      throw new Error('Wrong action type');
  }
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
