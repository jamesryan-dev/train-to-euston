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
  ${({showMore}) => (showMore ? ShowMore() : null)};
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
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    h1 {
      opacity: 0.7;
    }
  `
}

const ShowMore = () => {
  return `
    padding: 2rem 0;
    padding-bottom: 3rem;
  `
}
