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
  const [timetables, setTimetables] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWorked, setHasWorked] = useState(false);
  const [hasError, setHasError] = useState(false)

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
            setIsLoaded(true);
            setHasWorked(true);
            setTimetables(result)
            console.log('TrainSingle >> ', 'isLoaded:', isLoaded, 'hasWorked:', hasWorked, 'timetable result:', result )
            return result
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log('TrainSingle >> ', 'isLoaded:', isLoaded, 'error', error)
          }
        )
    }, [])
  let timetable = timetables.stops
  console.log('stops:', timetable)

  const getEuston = (timetable) => {
    if (timetable != undefined) {
      // console.log('timetable in func != undefined:', timetable)
      const euston = timetable.find(stop => stop.station_code == 'EUS')
      // const euston = timetable.slice(-1)[0]
      // console.log('euston', euston)
      const eustonArrivalTime = euston.expected_arrival_time
      return eustonArrivalTime
    }
  }
  return (
    <TrainSingleComp>
      <div className='timeStatus'>
        <div className='timeDesination'>
          <InfoContainer className='infoContainer'>
            <p className='small-p'>Berkhamsted</p>
            <p className='arrival'>{expectedArrival}</p>
          </InfoContainer>
          <InfoContainer className='infoContainer'>
            <p className='small-p'>Euston</p>
            <p className='arrival'>{getEuston(timetable)}</p>
          </InfoContainer>

        </div>
      {renderStatus(status)}

      </div>
    </TrainSingleComp>
  );
};

export default TrainSingle;

// {timetable.map(item => {
//   return (
//     <div>timetable</div>
//   )
// }
// )}
