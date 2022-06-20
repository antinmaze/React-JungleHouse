import './App.css';

function Card() {
  const monsteraPrice=8
  const ivyPrice=10
  const flowersPrice=15
  return (<div className="Card">
    <lu>
      <li>Monstera, Price: { monsteraPrice }</li>
      <li>Lierre, Price: { ivyPrice }</li>
      <li>Bouquet de Fleurs, Price: { flowersPrice }</li>
    </lu>
    Total : {monsteraPrice + ivyPrice + flowersPrice }€
    </div>);
}


export default Card;
