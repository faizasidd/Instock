import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../utils/useForm";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

import "./EditInventoryItem.scss";
import InventoryForm from "../InventoryForm/InventoryForm";

const EditInventoryItem = () => {
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

  const submitEditedItem = (e) => {
    e.preventDefault();
    if (handleSubmit(e, inventory)) {
      axios
        .post(
          "http://localhost:8080/inventories",
          {
            warehouseName: inventory.warehouseName,
            // warehouseID: inventory.warehouseID,
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
    }
  };

  return (
    <div className="add-inventory">
      <div className="add-inventory__title-container">
        <img src={arrowBack} />
        <h1 className="add-inventory__title">Edit New Inventory Item</h1>
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
          onClick={submitEditedItem}
          type="submit"
          value="submit"
          className="add-inventory__button--save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditInventoryItem;
