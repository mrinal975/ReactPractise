import Layout from './components/Layout';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import './styles/App.css';
function App() {
  return (
    <div className="app">
      <Layout>
      </Layout>
      <Login></Login>
    </div>
    
  );
}

export default App;
