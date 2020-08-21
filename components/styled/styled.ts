import styled from "styled-components";

export const FadeUp = styled.div`
  opacity: ${(props) => props.successful ? '1' : '0'};
  transform: ${(props) => props.successful ? 'translateY(0)' : 'translateY(-5px)'};
  transition: all 1s ease;
`

export const Center = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  ${({ noTrains }) => (noTrains ? NoTrains() : null)};
  ${({loader}) => (loader ? Loader() : null)};
`

const NoTrains = () => {
return `
  height: 60vh;
  flex: 1;
  align-items: center;
`
}

const Loader = () => {
  return `
    flex-direction: column;
    .loader {
    }
  `
}
