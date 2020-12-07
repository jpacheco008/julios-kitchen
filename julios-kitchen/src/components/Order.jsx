import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { postURL, config } from "../services";

export default function Order(props) {

  const [orderName, setOrderName] = useState("");
  const [item, setItem] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  // const params = useParams();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      orderName,
      item,
      orderNumber,
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
        <label htmlFor="item">Item</label>
        <input
          name= "item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <label htmlFor="orderNumber">Number</label>
        <input
          name= "orderNumber"
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
    )
  
}
