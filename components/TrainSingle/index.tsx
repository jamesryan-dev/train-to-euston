import React from 'react';
import {TrainSingleComp} from './styled'

interface Props {
  expectedArrival?: string;
  status: string;
  destination: string;
}

const TrainSingle: React.FC<Props> = ({expectedArrival, status, destination}): JSX.Element => {
  return (
    <TrainSingleComp>
    <div>
      {expectedArrival}
    </div>
    <div>
      {status}
    </div>
    <div>
    {destination}
    </div>
    </TrainSingleComp>
  );
};

export default TrainSingle;
