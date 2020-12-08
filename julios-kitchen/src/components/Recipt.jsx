export default function Recipt(props) {
  let items =
     props.recipts.fields.item[0] === "{"
      ? JSON.parse(props.recipts.fields.item)[0]
      : props.recipts.fields.item;
  return (
    <div>
      <ul>
        {props.recipts.fields.orderNumber} {typeof items === "object" ? items.map((item) => {
          return <li>{item}</li>
        }): items}
      </ul>
      <h4>{props.recipts.fields.orderName}</h4>
      <h5>{props.recipts.createdTime}</h5>
    </div>
  );
}
