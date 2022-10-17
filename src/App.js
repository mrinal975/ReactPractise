import Layout from './components/Layout';
import './styles/App.css';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Quiz from './components/Pages/Quiz';
import Result from './components/Pages/Result';
import Signup from './components/Pages/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Quiz" component={Quiz} />
            <Route exact path="/result" component={Result} />
           </Switch>
        </Layout>
      </Router>
    </div>
    
  );
}

export default App;
