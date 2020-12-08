export default function Entrees(props) {
  return (
    <div>
      <h2> Entrees
      {props.menu.map((info) => {
        if (info.fields.type === "entree") {
          return (
            <div>
              <h5>{info.fields.name}</h5>;
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
  );
}
