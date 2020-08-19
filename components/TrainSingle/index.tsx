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
    } else if (status == 'CHANGE OF ORIGIN') {
      return (
        <Status changeOfOrigin>Change of origin</Status>
      )
    }
  }

  return (
    <TrainSingleComp>
      <div className='timeStatus'>
        <div className='timeDesination'>
          <p className='arrival'>{expectedArrival}</p>
          <p className='destination'>{destination}</p>
        </div>
      {renderStatus(status)}
      </div>
    </TrainSingleComp>
  );
};

export default TrainSingle;
