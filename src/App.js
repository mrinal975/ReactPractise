import Layout from './components/Layout';
import './styles/App.css';
import Result from './components/Pages/Result';
function App() {
  return (
    <div className="app">
      <Layout>
        <Result/>
      </Layout>
    </div>
    
  );
}

export default App;
