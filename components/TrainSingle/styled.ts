import styled from 'styled-components'

export const Status = styled.div`
    padding: 10px;

    ${({ early }) => (early ? Early(early) : null)};
    ${({ onTime }) => (onTime ? OnTime(onTime) : null)};
    ${({ late }) => (late ? Late(late) : null)};
`

const Early = () => {
  return `
    background: green;
  `
}

const OnTime = () => {
  return `
    background: yellow;
  `
}

const Late = () => {
  return `
    background: red;
  `
}

export const TrainSingleComp = styled.div`
  margin-bottom: 2rem;
`
