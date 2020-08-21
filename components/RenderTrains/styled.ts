import styled, {css} from 'styled-components'

export const TrainSingleComp = styled.div`
  margin-bottom: 2rem;
`

export const TrainsList = styled.div`
  ${({ successful }) => (successful ? createCSS() : null)};
  ${( {showAll}) => (showAll ? showRest() : null)};
  .show-more {
    opacity: ${(props) => props.successful ? '1' : '0'};
    transform: ${(props) => props.successful ? '0' : '-5px'};
    transition: all 1s ease;
    display: ${(props) => props.showAll ? 'none' : 'block'};
  }
`

function createCSS() {
  let styles = '';

  for (let i = 0; i < 3; i += 1) {
     styles += `
       .SingleTrain-${i} {
         opacity: 1;
         transform: translateY(0px);
         transition: all 0.666s ease;
         transition-delay: ${(i/4) + .1}s;
       }
     `
  }
  return css`${styles}`;
}

function showRest() {
  let styles = '';

  for (let i = 3; i < 20; i += 1) {
     styles += `
       .SingleTrain-${i} {
         opacity: 1;
         transform: translateY(0px);
         transition: all 0.666s ease;
         transition-delay: ${(i/4) + .1}s;
       }
     `
  }
  return css`${styles}`;
}
