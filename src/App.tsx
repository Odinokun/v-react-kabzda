import { FC, useState } from 'react';
import { CtrlAccordion } from './components/Accordions/CtrlAccordion';
import { UncAccordion } from './components/Accordions/UncAccordion';
import { CtrlRating } from './components/Ratings/CtrlRating';
import { UncRating } from './components/Ratings/UncRating';
import { UncOnOff } from './components/OnOffs/UncOnOff';
import { CtrlOnOff } from './components/OnOffs/CtrlOnOff';
import './App.css';
import { UncInput } from './Inputs/UncInput';
import { UncInputRef } from './Inputs/UncInputRef';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accCollapsed, setAccCollapsed] = useState<boolean>(false);
  const [isOnOffVal, setIsOnOffVal] = useState<boolean>(false);

  return (
    <div className='App'>
      <PageTitle title='Accordions' />
      <CtrlAccordion
        titleValue='Controlled accordion'
        collapsed={accCollapsed}
        setAccCollapsed={setAccCollapsed}
      />
      <UncAccordion titleValue='Uncontrolled accordion' />
      <hr />
      <PageTitle title='Ratings' />
      <h4>Controlled rating</h4>
      <CtrlRating value={ratingValue} setRatingValue={setRatingValue} />
      <h4>Uncontrolled rating</h4>
      <UncRating />
      <hr />
      <PageTitle title='OnOffs' />
      <h4>Uncontrolled onOff</h4>
      <UncOnOff onChange={setIsOnOffVal} /> {/* a little bullshit */}
      <h4>Controlled onOff</h4>
      <CtrlOnOff isOn={isOnOffVal} setIsOnOffVal={setIsOnOffVal} />
      <PageTitle title='Inputs' />
      <h4>Uncontrolled input</h4>
      <UncInput />
      <UncInputRef />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

const PageTitle: FC<PageTitlePropsType> = ({ title }) => {
  return <h3>{title}</h3>;
};

export default App;
