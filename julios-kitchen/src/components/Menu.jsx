import { Link } from "react-router-dom";


export default  function Menu(props)  {
  
    return (
      <div>
        <h3>{props.menu.fields.name}</h3>
        <h5>{props.menu.fields.description}</h5>
        <img src={props.menu.fields.picture} alt=""></img>
      </div>
    )
  
}
