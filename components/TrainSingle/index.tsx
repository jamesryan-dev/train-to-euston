import React, { useState, useEffect } from 'react';
import {TrainSingleComp, Status, InfoContainer, SmallP} from './styled'

interface Props {
  expectedArrival?: string;
  status: string;
  destination: string;
  time: boolean;
  early: boolean;
  late: boolean;
  noReport: boolean;
}

const TrainSingle: React.FC<Props> = ({expectedArrival, status, destination, onTime, early, late, noReport, service_timetable, operator_name}): JSX.Element => {
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
    } else if (status == "NO REPORT") {
      return (
        <Status noReport>No report</Status>
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

  const getBerkhamstedPlatform = (timetable) => {
    if (timetable != undefined) {
      // console.log('timetable in func != undefined:', timetable)
      const berkhamsted = timetable.find(stop => stop.station_code == 'BKM')
      const berkhamstedPlatform= berkhamsted.platform
      return berkhamstedPlatform
    }
  }

  const getEustonPlatform = (timetable) => {
    if (timetable != undefined) {
      // console.log('timetable in func != undefined:', timetable)
      const euston = timetable.find(stop => stop.station_code == 'EUS')
      // const euston = timetable.slice(-1)[0]
      // console.log('euston', euston)
      const eustonPlatform= euston.platform
      return eustonPlatform
    }
  }
  return (
    <TrainSingleComp>
      <div className='timeStatus'>
        <div className='timeDesination'>
          <InfoContainer className='infoContainer'>
            <SmallP className='small-p'>Berkhamsted</SmallP>
            <SmallP className='arrival'>{expectedArrival}</SmallP>
            <SmallP>{operator_name}</SmallP>
          </InfoContainer>
          <InfoContainer className='infoContainer'>
            <SmallP className='small-p' minWidth>Euston</SmallP>
            <SmallP className='arrival'>{getEuston(timetable)}</SmallP>
            <SmallP>Platform {getEustonPlatform(timetable)}</SmallP>
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
