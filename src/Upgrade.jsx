import './Upgrade.css';

const Upgrade = (props) => {

  return (
    <div className="Upgrade">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button onClick={props.action}>{props.cost}</button>
    </div>
  )
}

export default Upgrade