import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../utils/useForm";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

import "./AddInventoryItem.scss";
import InventoryForm from "../InventoryForm/InventoryForm";

const AddInventoryItem = () => {
  const [inventory, setInventory] = useState({
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  const { handleChange, errors, handleSubmit } = useForm();

  const handleInputChange = (e) => {
    e.preventDefault();
    handleChange(e);
    setInventory({ ...inventory, [e.target.name]: e.target.value });
    console.log(inventory);
  };

  const submitAddedItem = (e) => {
    e.preventDefault();
    handleSubmit(e, inventory);
    axios
      .post(
        "http://localhost:8080/inventories",
        {
          warehouseName: inventory.warehouseName,
          itemName: inventory.itemName,
          description: inventory.description,
          category: inventory.category,
          status: inventory.status,
          quantity: inventory.quantity,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="add-inventory">
      <div className="add-inventory__title-container">
        <img src={arrowBack} />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </div>
      <div className="add-inventory__form-container">
        <div>
          <InventoryForm
            handleInputChange={handleInputChange}
            inventory={inventory}
            setInventory={setInventory}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="add-inventory__button-container">
        <button className="add-inventory__button">Cancel</button>
        <button
          onClick={submitAddedItem}
          type="submit"
          value="submit"
          className="add-inventory__button--save"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
};

export default AddInventoryItem;
