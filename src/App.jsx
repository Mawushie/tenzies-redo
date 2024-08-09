import { useEffect, useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState([]);
  //function that returns an array of 10 random numbers between 1-6 inclusive
  const allNewDice = () => {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.ceil(Math.random() * 6);
      // let randomNumber = Math.floor(Math.random() * 6) + 1;
      diceArray.push({
        value: randomNumber,
        isHeld: false,
      });
    }
    // console.log(diceArray);
    return diceArray;
  };

  //function to display dice elements
  const generateDiceElements = () => {
    let diceElements = allNewDice().map((item, index) => {
      return <Die value={item.value} key={index} />;
    });
    setDice(diceElements);
    return diceElements;
  };

  useEffect(() => {
    console.log("rolled");
    generateDiceElements();
  }, []);

  return (
    <>
      <main className="border rounded bg-slate-800 m-auto px-6 py-9 max-w-3xl">
        <div className="border rounded-md flex flex-col gap-7 justify-center items-center w-full h-96 bg-zinc-100">
          <div className="w-72">
            <h1 className="text-black font-bold text-xl">Tenzies</h1>
            <p className="text-indigo-950">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>

          <div className="grid grid-cols-5 grid-rows-2 gap-4">{dice}</div>

          <button
            className="border rounded bg-blue-600 text-white font-bold w-24 h-9 cursor-pointer"
            onClick={generateDiceElements}
          >
            Roll
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
