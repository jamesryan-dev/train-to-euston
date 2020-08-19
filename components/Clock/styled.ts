import styled from 'styled-components'

export const ClockComp = styled.div`

svg {
  height: 20vh;
  fill: none;
  stroke: #000;
  stroke-width: 1;
  stroke-linecap: round;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
  --start-seconds: 57;
  --start-minutes: 45;
  --start-hours: 11;
}

circle {
  fill: white;
}

.marks {
  -webkit-transform: translate(20px, 20px);
          transform: translate(20px, 20px);
  stroke-width: 0.2;
}

.seconds,
.minute,
.hour {
  -webkit-transform: translate(20px, 20px) rotate(0deg);
          transform: translate(20px, 20px) rotate(0deg);
}

.seconds {
  -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg));
          transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg));
  stroke-width: 0.3;
  -webkit-animation: rotateSecondHand 60s steps(60) infinite;
          animation: rotateSecondHand 60s steps(60) infinite;
  stroke: #d00505;
}

.minute {
  -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg));
          transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg));
  stroke-width: 0.6;
  -webkit-animation: rotateMinuteHand 3600s steps(60) infinite;
          animation: rotateMinuteHand 3600s steps(60) infinite;
  -webkit-animation-delay: calc(var(--start-seconds) * -1 * 1s);
          animation-delay: calc(var(--start-seconds) * -1 * 1s);
}

.hour {
  -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg));
          transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg));
  -webkit-animation: rotateHourHand calc(12 * 60 * 60s) linear infinite;
          animation: rotateHourHand calc(12 * 60 * 60s) linear infinite;
  stroke-width: 1;
  -webkit-animation-delay: calc(calc(var(--start-minutes) * -60 * 1s) + calc(var(--start-seconds) * -1 * 1s));
          animation-delay: calc(calc(var(--start-minutes) * -60 * 1s) + calc(var(--start-seconds) * -1 * 1s));
}

.tiaText {
  font-size: 1px;
  font-family: sans-serif;
  -webkit-transform: translate(14px, 19px) rotate(90deg);
          transform: translate(14px, 19px) rotate(90deg);
  fill: #dfdfdf;
  stroke: none;
}

.pin {
  stroke: #d00505;
  stroke-width: 0.2;
}

@-webkit-keyframes rotateSecondHand {
  from {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg));
  }
  to {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg + 360deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg + 360deg));
  }
}

@keyframes rotateSecondHand {
  from {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg));
  }
  to {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg + 360deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-seconds) * 6deg + 360deg));
  }
}
@-webkit-keyframes rotateMinuteHand {
  from {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg));
  }
  to {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg + 360deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg + 360deg));
  }
}
@keyframes rotateMinuteHand {
  from {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg));
  }
  to {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg + 360deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-minutes) * 6deg + 360deg));
  }
}
@-webkit-keyframes rotateHourHand {
  from {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg));
  }
  to {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg + 360deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg + 360deg));
  }
}
@keyframes rotateHourHand {
  from {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg));
  }
  to {
    -webkit-transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg + 360deg));
            transform: translate(20px, 20px) rotate(calc(var(--start-hours) * 30deg + 360deg));
  }
}
/* marks */
.marks > line:nth-child(1) {
  -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
}

.marks > line:nth-child(2) {
  -webkit-transform: rotate(calc(2 * 30deg));
          transform: rotate(calc(2 * 30deg));
}

.marks > line:nth-child(3) {
  -webkit-transform: rotate(calc(3 * 30deg));
          transform: rotate(calc(3 * 30deg));
  stroke-width: 0.5;
}

.marks > line:nth-child(4) {
  -webkit-transform: rotate(calc(4 * 30deg));
          transform: rotate(calc(4 * 30deg));
}

.marks > line:nth-child(5) {
  -webkit-transform: rotate(calc(5 * 30deg));
          transform: rotate(calc(5 * 30deg));
}

.marks > line:nth-child(6) {
  -webkit-transform: rotate(calc(6 * 30deg));
          transform: rotate(calc(6 * 30deg));
  stroke-width: 0.5;
}

.marks > line:nth-child(7) {
  -webkit-transform: rotate(calc(7 * 30deg));
          transform: rotate(calc(7 * 30deg));
}

.marks > line:nth-child(8) {
  -webkit-transform: rotate(calc(8 * 30deg));
          transform: rotate(calc(8 * 30deg));
}

.marks > line:nth-child(9) {
  -webkit-transform: rotate(calc(9 * 30deg));
          transform: rotate(calc(9 * 30deg));
  stroke-width: 0.5;
}

.marks > line:nth-child(10) {
  -webkit-transform: rotate(calc(10 * 30deg));
          transform: rotate(calc(10 * 30deg));
}

.marks > line:nth-child(11) {
  -webkit-transform: rotate(calc(11 * 30deg));
          transform: rotate(calc(11 * 30deg));
}

.marks > line:nth-child(12) {
  -webkit-transform: rotate(calc(12 * 30deg));
          transform: rotate(calc(12 * 30deg));
  stroke-width: 0.5;
}

`
