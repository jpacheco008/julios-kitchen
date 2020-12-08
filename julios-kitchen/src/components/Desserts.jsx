

export default function Desserts(props) {
 
    return (
      <div className="Desserts-Component">
        <h2 className="menu-title">Desserts</h2>
      {props.menu.map((info) => {
        if (info.fields.type === "dessert") {
          return (
            <div className="menu-section" key={info.id}>
              <div className="item-info">               
              <h5 className="item">{info.fields.name}</h5>
              <em className="description">{info.fields.description}</em>
              </div>
              <img className="pictures" src={info.fields.picture} alt=""></img>
            </div>
          )
        } else {
          return null;
        }
      })}
    
      </div>
    )
  
}
