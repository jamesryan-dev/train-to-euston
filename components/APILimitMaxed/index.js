import {APILimitMaxedComp} from './styled'
import BoxSVGComp from './BoxSvg.js'
import {SmallP} from '../TrainSingle/styled'

function APILimitMaxed () {
  return (
    <APILimitMaxedComp>
      <div className='wrapper'>
        <div className='header'>
          <h1>Oh Snap! Sorry about this..</h1>
        </div>
        <div className='copy'>
          <h3>It would apear that this app is more popular than I originally imagined..</h3>
          <h3>Unfortunately, nothing in life is truly free..</h3>
          <h3>If you find value from this service then please consider supporting it via donation so we can increase the requests made to our train database - in turn allowing eventual 24 hour access to Berkhamsted to Euston web app.</h3>
        </div>
        <div className='donation'>
          <BoxSVGComp />
          <a href="https://www.paypal.com/paypalme/jimmynames" className='button'>Support us</a>
        </div>
        <SmallP>Alternatively, the first 500 users/visits will always be able to use this app each and every day until we raise enough to fund all-day access :)</SmallP>
      </div>
    </APILimitMaxedComp>
  )
}

export default APILimitMaxed
