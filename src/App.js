import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Placeholder} />
      <Route path="/warehouse-details" component={Placeholder} />
      <Route path="/:edit-warehouse-details" component={Placeholder} />
      <Route path="/:add-warehouse" component={Placeholder} />
      <Route path="/:warehouse-inventory" component={Placeholder} />
      <Route path="/:warehouse-inventory-details" component={Placeholder} />
      <Route path="/:warehouse-inventory-edit" component={Placeholder} />
      <Route path="/:warehouse-inventory-add" component={Placeholder} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
