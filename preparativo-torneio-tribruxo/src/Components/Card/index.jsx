import "./style.css";

const Card = ({ name, house, actor, alive }) => {
  return (
    <div className="containerCard">
      <figcaption>
        <h2 className={house}>{name}</h2>
        <h4>{actor ? actor : "Sem ator"}</h4>
        <p className={house}>{house}</p>
      </figcaption>
    </div>
  );
};

export default Card;
