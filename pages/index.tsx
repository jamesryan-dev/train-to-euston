import TimeUntil from '../components/TimeUntil'
import RenderTrains from '../components/RenderTrains'
import Clock from '../components/Clock'
function Home(): JSX.Element {
  return (
    <div className="container">
      <>
      <TimeUntil />
      <RenderTrains />
      </>
    </div>
  );
}

export default Home;
