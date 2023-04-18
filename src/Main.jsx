import './Main.css';
import Bargraph from './Bargraph';
import TotalExpenditure from './TotalExpenditure';


export default function() {
  return (
    <main>
      <h1>Spending - Last 7 days</h1>
	<Bargraph />
      <hr className="seprator-line"/>
	<TotalExpenditure />
    </main>
  )
};
