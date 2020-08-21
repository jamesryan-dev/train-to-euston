import styled from 'styled-components'

export const APILimitMaxedComp = styled.div`
  box-shadow: 0 7px 13px rgba(11,31,29, 0.19), 0 4px 5px rgba(11,31,29, 0.23);
  background: #004c45;
  height: 75vh;
  height: auto;
  width: 90%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateY(5%) translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1.6rem;
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    h1 {
      margin-bottom: 1.2rem;
    }
    p {
      color: white;
      margin-top: 1.2rem;
    }
    .copy {
      width: 50%;
      h3 {
        margin-bottom: 1.2rem;
      }
    }
    .donation {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 50%;
      .button {
        flex: 1;
        margin-left: 2rem;
      }
    }
    svg {

      #Artboard{
        fill: white;
      }

      align-self: flex-start;
      display: flex;
      justify-content: flex-start;
    }
  }

  @media only screen and (max-width: 800px) {
    .wrapper {
      .copy, .donation {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 900px) {
    width: auto;
    .wrapper {
      .copy, .donation {
        width: 100%;
        .button {
          max-width: 200px;
          align-self: center;
          margin: 0 auto;
        }
      }
    }
  }
`
