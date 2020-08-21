import styled from 'styled-components'

export const BottomStickerComp = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: ${(props) => props.show ? '0' : '2'};
`

export const StickerComp = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 30vh;
  height: ${(props) => props.show ? '90vh' : '30vh'};
  box-shadow: ${(props) => props.show ? '0 7px 13px rgba(11,31,29, 0.19), 0 4px 5px rgba(11,31,29, 0.23)' : null};
  transform: ${(props) => props.show ? 'translateY(0%) translateX(-50%)' : 'translateY(80%) translateX(-50%)'};
  width: 90%;
  background: #004c45;
  background: #0d4a48;
  /* background: ${(props) => props.show ? 'blue' : 'red'}; */
  padding: 0.4rem 0.6rem;
  padding-top: 1rem;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  transition: all 1s;
  z-index: 5;
  .bottom-header {
    display: flex;
    justify-content: ${(props) => props.show ? 'center' : 'space-between'} ;
    align-items: center;
    position: relative;
    h3 {
      &:first-child,
      &:last-child {
        display: ${(props) => props.show ? 'none' : 'block'};
      }
    }
    .chevron {
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      position: absolute;
      transform-style: preserve-3d;
      transform: ${(props) => props.show ? 'rotateX(-180deg) translate(-50%, -50%)' : 'rotateX(0deg) translate(-50%, -50%)'};
      transition: all 1s ease;
      svg {
        /* backface-visibility: hidden; */
        fill: white;
        path {
          fill: white;
        }
      }
    }
  }
  .content {
    hr {
      opacity: 0.5;
      margin: 1.6rem;
    }
    h3 {
      margin-bottom: 1.2rem;
    }
    .title {
      margin-bottom: 3rem;
    }

    a {
      color: white;
    }
  }
  h3 {
    span {
      text-decoration: underline;
    }
  }
`
