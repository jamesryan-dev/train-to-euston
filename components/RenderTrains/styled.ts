import styled, {css} from 'styled-components'

export const TrainSingleComp = styled.div`
  margin-bottom: 2rem;
`

export const TrainsList = styled.div`
  ${({ successful }) => (successful ? createCSS() : null)};
`

function createCSS() {
  let styles = '';

  for (let i = 0; i < 20; i += 1) {
     styles += `
       .SingleTrain-${i} {
         opacity: 1;
         transform: translateY(0px);
         transition: all 0.666s ease;
         transition-delay: ${(i/2) + .1}s;
       }
     `
  }
  return css`${styles}`;
}
