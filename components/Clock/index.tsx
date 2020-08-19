import {ClockComp} from './styled'
import ClockSvg from './Clock.svg'
import React, { useState, useEffect, useRef } from 'react';

const Clock = (): JSX.Element => {
  const clockRef = useRef(null);
  useEffect(() => {
    console.log('clock in effect', clockRef)
  })
  return (
    <ClockComp>
      <ClockSvg ref={clockRef} />
    </ClockComp>
  )
  ;
};

export default Clock;

// const time = () => {
//   const svg = document.querySelector('svg');
//
//   const currentTime = new Date();
//   console.log(currentTime.getSeconds());
//   svg.style.setProperty('--start-seconds', currentTime.getSeconds());
//   svg.style.setProperty('--start-minutes', currentTime.getMinutes());
//   svg.style.setProperty('--start-hours', currentTime.getHours() % 12);
// }
