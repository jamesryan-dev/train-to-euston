import styled from 'styled-components'

export const HeaderComp = styled.header`
width: 100%;
padding: 0.5rem 0;
/* border-bottom: 2px solid black; */
box-shadow: inset 0 12px 21px -14px #0a2016;
h3 {
  font-weight: 200;
  color: #121212;
  color: #bebebe;
  /* text-transform: uppercase; */
}
  svg {
    width: 30px;
    enable-background:new 0 0 512 512;
    /* path {
      fill: #f0f0f0;
    } */
    fill: #f0f0f0;
    fill: #121212;
    fill: #bebebe;
  }
  .headerFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
