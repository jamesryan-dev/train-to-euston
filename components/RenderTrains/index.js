import React, { useState, useEffect } from 'react';
import TrainSingle from '../TrainSingle'
import { Center } from '../styled/styled'
import {TrainsList} from './styled'

// function RenderTrains(): JSX.Element {
import Loader from '../Loader'

function RenderTrains() {
  const [successfulFunction, setSuccessfulFunction] = useState(false)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWorked, setHasWorked] = useState(false);
  const [hasError, setHasError] = useState(false)
  const [items, setItems] = useState([]);


  useEffect(() => {
      fetch("https://transportapi.com/v3/uk/train/station/BKM/live.json?query&app_id=ceabf0ac&app_key=3d40a87351cfa3eebd978e20372e44e6")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.departures);
            setHasWorked(true);
            setTimeout(() => setSuccessfulFunction(true), 67)
            // setTimetables(fetch(result.departures.service_timetable))
            console.log('isLoaded:', isLoaded, 'hasWorked, ', hasWorked, ' result.departures:', result.departures )
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        // .then(result => fetch(result.departures.all.service_timetable.id))
        // .then(function(response) {
        //   return response.json();
        // })
        // .then(function(data) {
        //   console.log('data', data)
        // })
    }, [])
    // if (items === undefined || items.length == 0) {
    //   return (
    //     <Center noTrains>
    //       <h1>No more trains today</h1>
    //     </Center>
    //   )
    // }
    if (items == undefined) {
      return (
        <Center noTrains>
          <h1>Error: {error.message}</h1>
        </Center>
      )
    }
    if (error) {
      return (
        <Center noTrains>
          <h1>Error: {error.message}</h1>
        </Center>
      )
  } else if (!isLoaded) {
    return (
      <Center noTrains loader>
        <h1>Loading...</h1>
        <Loader />
      </Center>
    )
  } else if (isLoaded && hasWorked) {
      // console.log('items wasnt undefined', items)
      // console.log('items.all', items.all)
      let itemsAll = items.all
      console.log('itemsAll', itemsAll)
      console.log('typeOf itemsAll', typeof itemsAll)
      const resultEuston = items.all.filter(item => item.destination_name == "London Euston");
      // console.log('result Euston', resultEuston)
      // const result = resultEuston.filter(item => item.origin_name == "Milton Keynes Central");

      const result = resultEuston.filter(function(result) {
       return result.origin_name === "Milton Keynes Central" || result.origin_name === "Northampton" || result.origin_name === "Tring" || result.origin_name === 'Birmingham New Street';
     });

     if (result === undefined || result.length == 0) {
       return (
           <h3>No rest for the wicked</h3>
       )
     }

      console.log('result:', result);
      return (
        <>
        <TrainsList successful={successfulFunction}>
        {result.map((item, i) => {
          return (
            <TrainSingle
              i={i}
              key={item.train_uid}
              expectedArrival={item.expected_arrival_time}
              status={item.status}
              destination={item.destination_name}
              operator_name={item.operator_name}
              service_timetable={item.service_timetable}
             />
          )
        }
        )}
        </TrainsList>
        </>
      );
    } else {
      return (
        <h1>no data loaded</h1>
      )
    }
}

export default RenderTrains;
