import logo from './assets/logo.svg'
import './Header.css'


export default function(){
  return (
    <header>
      <div className="total-balance">
	<h2 className="total-balance__title">My balance</h2>
	<p className="total-balance__amount">$921.48</p>
      </div>
      <img alt="companyLogo" src={logo} className="logo"/>
    </header>
  )
};
