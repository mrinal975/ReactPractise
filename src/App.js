import ClockList from "./components/ClockList";
const quantities = [1,2,3];

function App() {

  return (
    <div className="app">
      <ClockList quantities={quantities}/>
    </div>
  );
}

export default App;
