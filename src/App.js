import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Placeholder from "./components/Placeholder/Placeholder";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import InventoryForm from "./components/InventoryForm/InventoryForm";

function App() {
  return (
    <BrowserRouter>
      <InventoryForm/>

      <Switch>
        <Route path="/" exact component={Placeholder} />
        {/* <Route path="/warehouses" component={Placeholder} /> */}
        <Route path="/warehouse/:warehouseId" component={Placeholder} />
        <Route path="/warehouse/edit/:warehouseId" component={Placeholder} />
        <Route path="/warehouse/add" component={Placeholder} />
        <Route path="/inventory" component={Placeholder} />
        <Route path="/inventory/:inventoryId" component={Placeholder} />
        <Route path="/inventory/edit/:inventoryId" component={Placeholder} />
        <Route path="/inventory/add" component={Placeholder} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
