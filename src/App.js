import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Placeholder from "./components/Placeholder/Placeholder";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryList from "./components/InventoryList/InventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={WarehouseList} />
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