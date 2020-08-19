// import TrainSvg from './train.svg'
const TrainSvg = require("./train.svg") as string;
import {HeaderComp} from './styled'

const Header = (): JSX.Element => {
  return (
    <HeaderComp>
      <div className='container'>
        <div className='headerFlex'>
          <TrainSvg />
          <h3>Berkhamsted to Euston</h3>
        </div>
      </div>
    </HeaderComp>
  )
  ;
};

export default Header;
