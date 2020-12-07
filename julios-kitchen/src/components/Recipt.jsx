

export default function Recipt(props) {
 
 
    return (
      <div>
        <h3>{props.recipts.fields.orderNumber} {props.recipts.fields.item}</h3>
        <h4>{props.recipts.fields.orderName}</h4>
        <h5>{props.recipts.createdTime}</h5>
      </div>
    )
  
}
