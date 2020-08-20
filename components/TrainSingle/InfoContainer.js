import {TrainSingleComp, Status, InfoContainer, SmallP} from './styled'

const InfoContainerComp = (props) => {
  const { name, arrival, platformNumber, firstStop, finalDestination, operatorName } = props
  return (
    <InfoContainer className='infoContainer'>
      <SmallP className='small-p' minWidth>{name}</SmallP>
      <SmallP className='arrival'>{arrival}</SmallP>
      {firstStop ? (
        <SmallP>{operatorName}</SmallP>
      ) : null
      }
      {finalDestination ? (
        <SmallP>Platform {platformNumber}</SmallP>
      ) : null
      }
    </InfoContainer>
  )
}

export default InfoContainerComp
