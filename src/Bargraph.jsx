import './Bargraph.css';
import data from './data.json';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);



export default function() {
  return (
    <ul className="bar-graph">
      {data.map((item, index) => ( 
	      <li className="bar-graph__item"
		  key={index}>
		<div className={`bar-graph__item__bar ${index === dayjs().weekday() && "bar-graph__item__bar--active"}`}
		     style= {{
			 height: `${item.amount * 3 / 15}rem`,
		       }}
		  ></div>
		  <h2 className="bar-graph__item__name">{item.day}</h2>
	      </li>
	  ))}
    </ul>
  )
}
