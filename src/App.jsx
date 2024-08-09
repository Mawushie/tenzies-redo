import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Confetti from "react-confetti";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [tenzies, setTenzies] = useState(false);
  //function to generate new Die from 1 to 6 inclusive
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: uuid(),
    };
  };

  //function that generates an array of 10 die elements
  const allNewDice = () => {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie());
    }
    return diceArray;
  };
  const [dice, setDice] = useState(allNewDice());

  const rollDice = () => {
    if (tenzies) {
      allNewDice();
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice((oldDice) => {
        return oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        });
      });
    }
  };

  //function to hold dice when clicked
  const holdDice = (id) => {
    //setDice, map through array, check if id received is the same as id,
    //if same, toggle is held else keep same
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die;
      });
    });
  };

  //displaying dice elements
  const diceElements = dice.map((item) => {
    return (
      <Die
        value={item.value}
        isHeld={item.isHeld}
        key={item.id}
        holdDice={() => holdDice(item.id)}
      />
    );
  });

  useEffect(() => {
    console.log("changed");
    const allHeld = dice.every((die) => die.isHeld === true);
    let firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      console.log("Yaay!!");
      setTenzies(true);
    }
  }, [dice]);

  return (
    <>
      {tenzies && <Confetti />}
      <main className="border rounded bg-slate-800 m-auto px-6 py-9 max-w-3xl">
        <div className="border rounded-md flex flex-col gap-7 justify-center items-center w-full h-96 bg-zinc-100">
          <div className="w-3/4 sm:w-72">
            <h1 className="text-black font-bold text-xl">Tenzies</h1>
            <p className="text-indigo-950">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>

          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            {diceElements}
          </div>

          <button
            className="border rounded bg-blue-600 text-white font-bold w-36 h-16 cursor-pointer"
            onClick={rollDice}
          >
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
