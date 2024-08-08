import "./App.css";
import Die from "./components/Die";

function App() {
  return (
    <>
      <main className="justw-3/4 border rounded bg-slate-800 m-auto px-6 py-9 max-w-3xl ">
        <div className=" flex justify-center items-center w-full h-80 bg-zinc-100">
          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            <Die value={1} />
            <Die value={1} /> <Die value={1} /> <Die value={1} />{" "}
            <Die value={1} /> <Die value={1} /> <Die value={1} />{" "}
            <Die value={1} /> <Die value={1} /> <Die value={1} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
