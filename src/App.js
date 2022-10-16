import Layout from './components/Layout';
// import Home from './components/Pages/Home';
// import Signup from './components/Pages/Signup';
import Quiz from './components/Pages/Quiz';
import './styles/App.css';
function App() {
  return (
    <div className="app">
      <Layout>
      </Layout>
      {/* <Home/> */}
      {/* <Signup /> */}
      <Quiz/>
    </div>
    
  );
}

export default App;
