import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Create from './componets/Create';
import Main from './componets/Main';
import About from './componets/About';
import Footer from './componets/Footer';
import Note from './componets/Note';
import Error from './componets/Error';
import Header from './componets/Header';

import './App.css';

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/note/" component={Note} />
          <Route exact path="/note/:noteURL" component={Note} />
          <Route exact path="/create" component={Create} />
          <Route component={Error} />

        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
