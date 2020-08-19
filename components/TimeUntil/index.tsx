import React, { useState, useEffect } from 'react';

interface Props {
  expectedArrival?: string;
  status: string;
  destination: string;
}

const workOutTime = (data, i) => {
  console.log('items wasnt undefined', data)
  // console.log('items.all', data.all)
  let itemsAll = data
  console.log('itemsAll', itemsAll)
  const result = data.filter(item => item.destination_name = "London Euston");
  console.log('result:', result);
  let first = result[i]
  console.log('first', first)

  // Arrival Time

  const arrivalTime = first.expected_arrival_time
  const arrivalTimeNum = arrivalTime.split(':')
  console.log('arrivalTime', arrivalTime, 'arrivalTimeNum', arrivalTimeNum)
  const arrivalTimeNumH = arrivalTimeNum[0]
  const arrivalTimeNumM = arrivalTimeNum[1]
  const arrivalH = Number(arrivalTimeNumH)
  const arrivalM = Number(arrivalTimeNumM)
  console.log('arrivalH', arrivalH, 'arrivalM', arrivalM)


  // Current Time
  var d = new Date();
  var t = d.getTime();
  var h = d.getHours()
  var m = d.getMinutes()
  console.log('h', h, 'm', m)
  // const currentTime = []
  // const currentTimeArray = currentTime.push(h, m)
  // console.log('currentTimeArray', currentTimeArray)
  let timeUntilTrain
  if (arrivalH != h) {
    const minutesUntilHourChange = 60 - m
    const totalTimeUntilTrain = minutesUntilHourChange +  arrivalM
    console.log('totalTimeUntilTrain', totalTimeUntilTrain)
    timeUntilTrain = totalTimeUntilTrain
    console.log('timeUntilTrain in func:', timeUntilTrain)
    // setTimeUntilArrival(timeUntilTrain)
    return (
      <div><h1>{`${timeUntilTrain} minutes until the next train to London Euston`}</h1></div>
    );
    // return timeUntilTrain
  } else if (arrivalH == h && arrivalM == m){
    console.log('arrived!')
    // this.state.setHasArrived(true)
    setTimeout(() => workOutTime(data, 1), 3000)
    return (
      <div><h1>{`The train is at the platform`}</h1></div>
    );
  } else if (arrivalH == h && m > arrivalM) {
    console.log('train has gone!')
    setTimeout(() => workOutTime(data, 1), 3000)
    return (
      <div><h1>{`You just missed it, refresh to see when the next one is`}</h1></div>
    );
  } else if (arrivalH == h && (arrivalM - m == 1)) {
    return (
      <div><h1>{`1 minute until the next train arrives`}</h1></div>
    );
  } else {
    console.log('same hour')
    const minutesLeft = arrivalM - m
    console.log('minutes Left:', minutesLeft)
    timeUntilTrain = minutesLeft
    return (
      <div><h1>{`${timeUntilTrain} minutes until the next train`}</h1></div>
    );
  }
  console.log('timeUntilTrain:', timeUntilTrain)
  // return timeUntilTrain
}


function TimeUntil(): JSX.Element {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWorked, setHasWorked] = useState(false);
  const [hasError, setHasError] = useState(false)
  const [hasArrived, setHasArrived] = useState(false)
  const [timeUntilArrival, setTimeUntilArrival] = useState(0)
  const [items, setItems] = useState([]);


  useEffect(() => {
      fetch("http://transportapi.com/v3/uk/train/station/BKM/live.json?query&app_id=ceabf0ac&app_key=3d40a87351cfa3eebd978e20372e44e6")
        .then(res => res.json())
        .then(
          (result) => {
            console.log('isLoaded:', isLoaded, 'hasWorked, ', hasWorked, ' result.departures:', result.departures )
            setIsLoaded(true);
            setItems(result.departures);
            setHasWorked(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    let timeUntilTrain
    if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded && hasWorked) {
      let time
      return workOutTime(items.all, 0)
    } else {
      return (
        <h1>no data loaded</h1>
      )
    }
}

export default TimeUntil;
