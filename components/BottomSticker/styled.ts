import styled from 'styled-components'

export const BottomStickerComp = styled.div`
  /* background: blue; */
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
`

export const StickerComp = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 30vh;
  transform: translateY(80%) translateX(-50%);
  width: 90%;
  background: #004c45;
  padding: 0.4rem 0.6rem;
  padding-top: 1rem;
  border-radius: 10px;
  h3 {
    span {
      text-decoration: underline;
    }
  }
`
