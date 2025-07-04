import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
