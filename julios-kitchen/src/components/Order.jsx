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
        <div className="name-input">
        <label htmlFor="orderName">Customer Name</label>
        <input
          name= "orderName"
          type="text"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
          />
          </div>
        <div className="orders">
        <div className="type-order">
          <h2 className="menu-title">Appetizers</h2>
        {props.menu.map((info) => {
          if (info.fields.type === "appetizer") {
            return (
              <div key={info.id}>
                <input className="order-input"
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
        <div className="type-order">
          <h2 className="menu-title">Entrees</h2>
        {props.menu.map((info) => {
          if (info.fields.type === "entree") {
            return (
              <div key={info.id}>
                <input className="order-input"
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
        <div className="type-order">
          <h2 className="menu-title">Desserts</h2>
        {props.menu.map((info) => {
          if (info.fields.type === "dessert") {
            return (
              <div key={info.id}>
                <input className="order-input"
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
        </div>
        <div className="order-button">
        <button type="submit">Place Order</button>
        </div>
      </form>
      
    </div>
    )
  
}
