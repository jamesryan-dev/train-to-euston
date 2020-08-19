import React from 'react';
import {TrainSingleComp, Status} from './styled'

interface Props {
  expectedArrival?: string;
  status: string;
  destination: string;
  onTime: boolean;
  early: boolean;
  late: boolean;
}

const TrainSingle: React.FC<Props> = ({expectedArrival, status, destination, onTime, early, late}): JSX.Element => {

  const renderStatus = (status) => {
    if (status == 'ON TIME') {
      return (
        <Status onTime>On time</Status>
      )
    } else if (status == 'EARLY') {
      return (
        <Status early>Early</Status>
      )
    } else if (status == 'LATE') {
      return (
        <Status late>Late</Status>
      )
    }
  }

  return (
    <TrainSingleComp>
    <div>
      {expectedArrival}
    </div>
    <div>
      {renderStatus(status)}
    </div>
    <div>
    {destination}
    </div>
    </TrainSingleComp>
  );
};

export default TrainSingle;
