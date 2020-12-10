export default function Entrees(props) {
  return (
    <div className="Entrees-Component">
      <h2 className="menu-title">Entrees</h2>
      {props.menu.map((info) => {
        if (info.fields.type === "entree") {
          return (
            <div className="menu-section" key={info.id}>
              <div className="item-info">
                <h5 className="home-item">{info.fields.name}</h5>
                <em className="description">{info.fields.description}</em>
              </div>
              <img className="pictures" src={info.fields.picture} alt=""></img>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
