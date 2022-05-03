import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [arr, setArr] = useState();
  const [visible, setVisible] = useState(false);
  const [aleatorio, setAleatorio] = useState([]);

  useEffect(() => {
    fetch("https://hp-api-ken.herokuapp.com/api/characters/students")
      .then((res) => res.json())
      .then((res) => setArr(res))
      .catch((erro) => console.log(erro));
  }, []);

  function nAle() {
    setVisible(!visible);
    //filtro de casas
    const grif = arr.filter((el) => el.house === "Gryffindor");
    const slyt = arr.filter((el) => el.house === "Slytherin");
    const huff = arr.filter((el) => el.house === "Hufflepuff");
    const raven = arr.filter((el) => el.house === "Ravenclaw");

    const casas = [
      grif[Math.floor(Math.random() * grif.length)],
      slyt[Math.floor(Math.random() * slyt.length)],
      huff[Math.floor(Math.random() * huff.length)],
      raven[Math.floor(Math.random() * raven.length)] /** outras casas */,
    ];

    const escolhidos = casas.filter(
      (el, i) => el[i] !== Math.floor(Math.random() * 4) - 1
    );

    setAleatorio([...escolhidos]);
  }

  console.log(aleatorio);

  return (
    <div className="App">
      <header className="App-header">
        <main>
          {visible ? (
            aleatorio.map((el, i) => (
              <Card
                key={i}
                name={el.name}
                house={el.house}
                actor={el.actor}
                alive={el.alive}
              />
            ))
          ) : (
            <div>
              <h1>Torneio Tribruxo</h1>
              <h2>Clique no botão para encontrar os feiticeiros!</h2>
            </div>
          )}
        </main>

        <button className="botão-inicio" onClick={() => nAle()}>
          Tentar novamente
        </button>
      </header>
    </div>
  );
}

export default App;
