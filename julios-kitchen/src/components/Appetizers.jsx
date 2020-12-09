

export default function Appetizers(props) {
  
  
    return (
      <div className="Appetizers-Component">
        <h2 className="menu-title"> Appetizers</h2>
      {props.menu.map((info) => {
        if (info.fields.type === "appetizer") {
          return (
            <div className="menu-section" key={info.id}>
              
                <div className="item-info">
                <h5 className="home-item">{info.fields.name}</h5>
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
