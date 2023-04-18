import './Bargraph.css';
import data from './data.json';
import dayjs from 'dayjs';


export default function() {
  const calcGraphHeight = () => {
    const highest = Math.max(...data.map(item => item.amount));
    const blockHeight = 15;
    // make the highest block 70% of total hight
    const heightPerDollar = (70 * blockHeight) / (100 * highest);
    return heightPerDollar;
  };
  const heightPerDollar = calcGraphHeight();
  
  return (
    <ul className="bar-graph">
      {data.map((item, index) => ( 
	<li className="bar-graph__item" key={index}>
	  <p className="bar-graph__item__price">${item.amount}</p>
	  {/* logic that checks higlihts bar if todays day of week's maches with index of bar and the logic is complex because the graph starts from monday */} 
	  <div className={`bar-graph__item__bar
${((index + 1 === dayjs().day())  
|| (index === 6 && dayjs().day() === 0))
&& "bar-graph__item__bar--active"}`}
	       style= {{
		 height: `${item.amount * heightPerDollar}rem`,
	       }}
	  ></div>
	  <h2 className="bar-graph__item__name">{item.day}</h2>
	</li>
      ))}
    </ul>
  )
}
