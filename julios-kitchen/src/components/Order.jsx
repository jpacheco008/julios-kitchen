import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { postURL, config } from "../services";

export default function Order(props) {

  const [orderName, setOrderName] = useState("");
  const [item, setItem] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      orderName,
      item: JSON.stringify({0: item}),
    };
    
    await axios.post(postURL, { fields: data }, config); 
    props.setToggleFetch((prev) => !prev);
    history.push("/")
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="orderName">Costumer Name</label>
        <input
          name= "orderName"
          type="text"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
        />
        <div>
        {props.menu.map((info) => {
          if (info.fields.type === "appetizer") {
            return (
              <div>
                <input
          name= "item"
          type="checkbox"
          value={item}
          onChange={(e) => setItem([...item, info.fields.name])}
          />
          <label htmlFor="item">{info.fields.name}</label> 
              </div>
            )
          }else{return null}
        })}
        </div>
        <div>
        {props.menu.map((info) => {
          if (info.fields.type === "entree") {
            return (
              <div>
                <input
          name= "item"
          type="checkbox"
          value={item}
          onChange={(e) => setItem([...item, info.fields.name])}
          />
          <label htmlFor="item">{info.fields.name}</label> 
              </div>
            )
          }else{return null}
        })}
        </div>
        <div>
        {props.menu.map((info) => {
          if (info.fields.type === "dessert") {
            return (
              <div>
                <input
          name= "item"
          type="checkbox"
          value={item}
          onChange={(e) => setItem([...item, info.fields.name])}
          />
          <label htmlFor="item">{info.fields.name}</label> 
              </div>
            )
          }else{return null}
        })}
        </div>
        <button type="submit">Place Order</button>
      </form>
      
    </div>
    )
  
}
