import "./App.css";
import Actors from "./components/Actors";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <h1 className="text-5xl pb-3 rounded-md text-white bg-indigo-600">
        If you hard work. you can success in life.
      </h1>
      <Actors name={"taj"} age={45}></Actors>
      <Actors name={"Manna"} age={45}></Actors>
      <Counter></Counter>
    </>
  );
}

export default App;
