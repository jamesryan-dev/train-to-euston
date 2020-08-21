import React, { useState, useEffect } from 'react';
import {TimeUntilComp} from './styled'
import {FadeUp} from '../styled/styled'

// interface Props {
//   expectedArrival?: string;
//   status: string;
//   destination: string;
// }

const workOutTime = (data, i) => {
  // console.log('items wasnt undefined', data)
  // console.log('items.all', data.all)
  let itemsAll = data
  // console.log('itemsAll', itemsAll)
  // const result = data.filter(item => item.destination_name = "London Euston");
  // console.log('result:', result);
  const resultEuston = itemsAll.filter(item => item.destination_name == "London Euston");
  // console.log('result Euston', resultEuston)
  // const result = resultEuston.filter(item => item.origin_name == "Milton Keynes Central");

  const result = resultEuston.filter(function(result) {
   return result.origin_name === "Milton Keynes Central" || result.origin_name === "Northampton" || result.origin_name === "Tring" || result.origin_name === "Birmingham New Street";
   });
  let first = result[i]
  // console.log('first', first)

  // Arrival Time

  const arrivalTime = first.expected_arrival_time
  const arrivalTimeNum = arrivalTime.split(':')
  // console.log('arrivalTime', arrivalTime, 'arrivalTimeNum', arrivalTimeNum)
  const arrivalTimeNumH = arrivalTimeNum[0]
  const arrivalTimeNumM = arrivalTimeNum[1]
  const arrivalH = Number(arrivalTimeNumH)
  const arrivalM = Number(arrivalTimeNumM)
  // console.log('arrivalH', arrivalH, 'arrivalM', arrivalM)


  // Current Time
  var d = new Date();
  var t = d.getTime();
  var h = d.getHours()
  var m = d.getMinutes()
  // console.log('h', h, 'm', m)
  // const currentTime = []
  // const currentTimeArray = currentTime.push(h, m)
  // console.log('currentTimeArray', currentTimeArray)
  if (first === undefined || first.length == 0) {
    return (
      <TimeUntilComp><h2>There's no more trains unfortunately.. </h2></TimeUntilComp>
    )
  }
  let timeUntilTrain
  if (arrivalH != h) {
    const minutesUntilHourChange = 60 - m
    const totalTimeUntilTrain = minutesUntilHourChange +  arrivalM
    // console.log('totalTimeUntilTrain', totalTimeUntilTrain)
    timeUntilTrain = totalTimeUntilTrain
    // console.log('timeUntilTrain in func:', timeUntilTrain)
    // setTimeUntilArrival(timeUntilTrain)

    return (
    <TimeUntilComp><h2>{`${timeUntilTrain} minutes until the next train to London Euston`}</h2></TimeUntilComp>
    );
    // return timeUntilTrain
  } else if (arrivalH == h && arrivalM == m){
    // console.log('arrived!')
    // this.state.setHasArrived(true)
    setTimeout(() => workOutTime(data, 1), 3000)
    return (
    <TimeUntilComp><h2>{`The train is at the platform`}</h2></TimeUntilComp>
    );
  } else if (arrivalH == h && m > arrivalM) {
    // console.log('train has gone!')
    setTimeout(() => workOutTime(data, 1), 3000)
    return (
    <TimeUntilComp><h2>{`You just missed it, refresh to see when the next one is`}</h2></TimeUntilComp>
    );
  } else if (arrivalH == h && (arrivalM - m == 1)) {
    return (
    <TimeUntilComp><h2>{`1 minute until the next train arrives`}</h2></TimeUntilComp>
    );
  } else {
    // console.log('same hour')
    const minutesLeft = arrivalM - m
    // console.log('minutes Left:', minutesLeft)
    timeUntilTrain = minutesLeft
    return (
    <TimeUntilComp><h2>{`${timeUntilTrain} minutes until the next train`}</h2></TimeUntilComp>
    );
  }
  // console.log('timeUntilTrain:', timeUntilTrain)
  // return timeUntilTrain
}


function TimeUntil() {
  const [successfulFunction, setSuccessfulFunction] = useState(false)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWorked, setHasWorked] = useState(false);
  const [hasError, setHasError] = useState(false)
  const [hasArrived, setHasArrived] = useState(false)
  const [timeUntilArrival, setTimeUntilArrival] = useState(0)
  const [items, setItems] = useState([]);
  const [timetables, setTimetables] = useState([]);


  useEffect(() => {
      fetch("https://transportapi.com/v3/uk/train/station/BKM/live.json?query&app_id=ceabf0ac&app_key=3d40a87351cfa3eebd978e20372e44e6")
        .then(res => res.json())
        .then(
          (result) => {
            console.log('result.departures.service_timetable:', result.departures.service_timetable, 'isLoaded:', isLoaded, 'hasWorked, ', hasWorked, ' result.departures:', result.departures )
            setIsLoaded(true);
            setItems(result.departures);
            setHasWorked(true);
            setTimetables(fetch(result.departures.service_timetable))
            setTimeout(() => setSuccessfulFunction(true), 367) 
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        // .then(
        //   (result) => console.log('result.departures.service_timetable:', result)
        //
        //   // (result) => fetch(result.departures.service_timetable)
        // )
    }, [])
    let timeUntilTrain
    if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div></div>;
  } else if (isLoaded && hasWorked) {
      let time
      return (
        <FadeUp successful={successfulFunction}>
        {workOutTime(items.all, 0)}
        </FadeUp>
      )

    } else {
      return (
        <h1>no data loaded</h1>
      )
    }
}

export default TimeUntil;
