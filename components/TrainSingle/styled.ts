import styled from 'styled-components'

export const TrainSingleComp = styled.div`
  &.open {
    box-shadow: 0 7px 13px rgba(11,31,29, 0.19), 0 4px 5px rgba(11,31,29, 0.23);
    .timeStatus {
      align-items: flex-start;
      .status {
        margin-top: 1.6rem;
      }
    }
    .timeDesination {
      /* flex-direction: column; */
      .infoContainer {
        margin-bottom: 1.2rem;
      }
    }
  }
  .eustonAdditional {
    .additionalStops {
      .small-p {
        width: 100%;
      }
    }
  }
  margin-bottom: 2rem;
  background-color: #3a7b75;
  border-radius: 6px;
  color: white;
  padding: 10px 6px;
  box-shadow: 0 5px 10px rgba(11,31,29, 0.19), 0 3px 3px rgba(11,31,29, 0.23);
  .additionalStops {
    display:  ${(props) => props.showAdditionalStops ? 'flex' : 'none'};
    flex-direction: column;
  }
  .timeDesination {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 60%;
    /* flex: 1; */
    .arrival {
      font-size: 1.6rem;
      padding-bottom: 4px;
    }
    .destination {
      opacity: 0.7;
    }
  }
  .timeStatus {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    .status {
      margin-top: 1.6rem;
    }
  }
`


export const Status = styled.div`
    padding: 5px 8px;
    border-radius: 20px;
    display: inline-flex;
    min-width: 55px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;
    background: #004c45;
    ${({ early }) => (early ? Early() : null)};
    ${({ late }) => (late ? Late() : null)};
    ${({changeOfOrigin}) => (changeOfOrigin ? ChangeOfOrigin() : null)};
    ${({ time }) => (time ? OnTime() : null)};
    ${({ noReport }) => (noReport ? NoReport() : null)};
`

const Early = () => {
  return `
    // background: #00b066;
    color: #00b066;
    color: #d7d7d7;
  `
}

const OnTime = () => {
  return `
    color: #fcb409;
    // backgrund: #004c45;
    color: #00b066;
  `
}

const Late = () => {
  return `
    color: #f26175;
  `
}

const ChangeOfOrigin = () => {
  return `
    color: #fcb409;
  `
}

const NoReport = () => {
  return`
    color: #3b7afc;
  `
}

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  justify-content: flex-start;
  .destination {
    margin-left: 6px;
  }
`

export const SmallP = styled.p`
  font-size: 1rem;
  opacity: 0.7;
  padding-bottom: 3px;
  width: ${(props) => props.minWidth ? '52px' : null};

`
