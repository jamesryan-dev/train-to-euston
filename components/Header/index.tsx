import TrainSVGComp from './TrainSVG'
import {HeaderComp} from './styled'

const Header: React.FC<Props> = ({title}): JSX.Element => {
  return (
    <HeaderComp>
      <div className='container'>
        <div className='headerFlex'>
          <TrainSVGComp />
          <h3>{title}</h3>
        </div>
      </div>
    </HeaderComp>
  )
  ;
};

export default Header;
