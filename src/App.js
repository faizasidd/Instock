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
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
// import WarehouseForm from "./components/WarehouseForm/WarehouseForm";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={WarehouseList} />
        <Route path="/warehouse/edit/:warehouseId" component={EditWarehouse} />
        <Route path="/warehouse/add" component={AddWarehouse} />
        <Route path="/warehouse/:warehouseId/inventory" component={InventoryList} />
        <Route path="/warehouse/:warehouseId" component={WarehouseInventoryList} />
        <Route path="/inventory/edit/:inventoryId" component={EditInventoryItem} />
        <Route path="/inventory/add" component={AddInventoryItem} />
        <Route path="/inventory/:inventoryId" component={Placeholder} />
        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;