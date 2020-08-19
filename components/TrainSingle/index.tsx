import React, { useState, useEffect } from 'react';
import {TrainSingleComp, Status, InfoContainer} from './styled'

interface Props {
  expectedArrival?: string;
  status: string;
  destination: string;
  time: boolean;
  early: boolean;
  late: boolean;
}

const TrainSingle: React.FC<Props> = ({expectedArrival, status, destination, onTime, early, late, service_timetable}): JSX.Element => {

  const renderStatus = (status) => {
    if (status == 'ON TIME') {
      return (
        <Status time>On time</Status>
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

  const renderEustonArrival = (result) => {
    console.log('result in renderEustonArrival', result)
    return (
      <div>
        lol
      </div>
    )
  }

  useEffect(() => {
      fetch(service_timetable.id)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('timetable result:', result )
          },
          (error) => {
            console.log('error', error)
          }
        )
    }, [])

  return (
    <TrainSingleComp>
      <div className='timeStatus'>
        <div className='timeDesination'>
          <InfoContainer className='infoContainer'>
            <p className='small-p'>Berkhamsted</p>
            <p className='arrival'>{expectedArrival}</p>
          </InfoContainer>
        </div>
      {renderStatus(status)}
      {renderEustonArrival()}
      </div>
    </TrainSingleComp>
  );
};

export default TrainSingle;
