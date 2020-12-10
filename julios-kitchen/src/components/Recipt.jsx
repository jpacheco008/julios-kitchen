export default function Recipt(props) {
  let items =
    props.recipts.fields.item[0] === "{"
      ? JSON.parse(props.recipts.fields.item)[0]
      : props.recipts.fields.item;

  return (
    <div className="recipt">
      <ul className="number-item">
        Order: {props.recipts.fields.orderNumber}{" "}
        {typeof items === "object"
          ? items.map((item, i) => {
              return <li className="item" key={`recipt${i}`}>{item}</li>;
            })
          : items}
      </ul>
      <div className="name-time">
        <h4 className="recipt-name">{props.recipts.fields.orderName}</h4>
        <p className="time-stamp">{props.recipts.createdTime}</p>
      </div>
    </div>
  );
}
