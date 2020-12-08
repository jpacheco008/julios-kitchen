

export default function Appetizers(props) {
  
  
    return (
      <div>
        <h2> Appetizers
      {props.menu.map((info) => {
        if (info.fields.type === "appetizer") {
          return (
            <div>
            <h5>{info.fields.name}</h5>
              <em>{info.fields.description}</em>
              <img src={info.fields.picture} alt=""></img>
            </div>
          )
        } else {
          return null;
        }
      })}
      </h2>
      </div>
    )
  
}
