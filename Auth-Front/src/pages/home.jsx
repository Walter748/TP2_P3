// App.jsx (o tu archivo principal donde configuras las rutas)

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import NotFound from './components/NotFound'; // Componente para manejar rutas no encontradas

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} /> {/* Manejar rutas no encontradas */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
