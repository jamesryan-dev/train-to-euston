import styled from 'styled-components'

export const BottomStickerComp = styled.div`
  /* background: blue; */
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
  background: ${(props) => props.show ? 'blue' : 'red'};
  padding: 0.4rem 0.6rem;
  padding-top: 1rem;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  transition: all 1s;

  z-index: 5;
  .bottom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    span {
      text-decoration: underline;
    }
  }
`
