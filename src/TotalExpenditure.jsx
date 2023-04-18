import data from './data.json';
import './TotalExpenditure.css';


export default function(){
    return (
	<div className="total-expense">
	    <div className="total-expense__this-month">
		<h2 className="total-expense__this-month__title">Total this month</h2>
		<p className="total-expense__this-month__amount">$478.33</p>
	    </div>
	    <div className="total-expense__last-month">
		<p className="total-expense__last-month__percent">+2.4%</p>
		<h2 className="total-expense__last-month__title">from last month</h2>
	    </div>
	</div>
    )
};
