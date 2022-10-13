import RenderPropsClickCounter from "./components/RenderPropsClickCounter";
import RenderPropsHoverCounter from "./components/RenderPropsHoverCounter";
import RenderPropsWithCounter from "./components/RenderPropsWithCounter";


function App() {

  return (
    <div className="app">
      <RenderPropsWithCounter>
        {(counter,incrementCount )=>(
          <RenderPropsClickCounter count={counter} incrementCount = {incrementCount}/>
        )}
      </RenderPropsWithCounter>
      <RenderPropsWithCounter>
        {(counter, incrementCount)=>(
          <RenderPropsHoverCounter count={counter} incrementCount = {incrementCount}/>
        )}
      </RenderPropsWithCounter>
      </div>
  );
}

export default App;
