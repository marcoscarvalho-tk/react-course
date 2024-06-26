import { useState, useRef } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    // A função abaixo tem o mesmo efeito das acima
    // porém, garante o valor do último state
    // caso haja uma chamada dupla ou simultânea de setState
    // na mesma função.
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  // Esta função insere o caracter digitado em um objeto
  // em que:
  // event - é o gatilho que dispara o chamando a função => onChange{}
  // target - é local onde está ocorrendo o event => <input/>
  // value - é o valor inserido no input => texto, data, email...
  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  // A função abaixo "limpa" o campo do input 
  // quando selecionado com o cursor através do
  // atributo onFocus
  // OBS: necessário importar useRef 
  const ref = useRef(null);
  function handleClean() {
    return (ref.current.value = "");
  }

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        ref={ref}
        onFocus={handleClean}
      />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </span>
    </li>
  );
}
