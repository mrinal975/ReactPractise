import Layout from './components/Layout';
import Home from './components/Pages/Home';
import './styles/App.css';
function App() {
  return (
    <div className="app">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
