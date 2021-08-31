import "./developer.css";

const DeveloperCards = ({ name, age, country }) => {
  return (
    <div className="cardDeveloper">
      <p>Dev: {name}</p>
      <p>Idade: {age} </p>
      <p>País: {country} </p>
    </div>
  );
};

export default DeveloperCards;
