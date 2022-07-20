import React, { useState } from "react";
import "./AddWarehouse.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import useForm from "../../utils/useForm";

const AddWarehouse = (props) => {
  const [warehouse, setWarehouse] = useState({
    id: "",
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "", //I flattened the contact part - this will have to be adjusted in the backend
    contactPosition: "",
    contactPhone: "",
    contactEmail: "",
  });
  const { handleChange, values, errors, handleSubmit } = useForm();
  const handleInputChange = (e) => {
    handleChange(e);
    setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-warehouse">
      <div className="add-warehouse__title-container">
        <img src={arrowBack} />
        <h1 className="add-warehouse__title">Add Warehouse</h1>
      </div>
      <div className="add-warehouse__form-container">
        <WarehouseForm
          handleInputChange={handleInputChange}
          warehouse={warehouse}
          setWarehouse={setWarehouse}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="add-warehouse__button-container">
        <button className="add-warehouse__button">Cancel</button>
        <button
          onClick={(e) => handleSubmit(e, warehouse)}
          type="submit"
          value="submit"
          className="add-warehouse__button--save"
        >
          + Add Warehouse
        </button>
      </div>
    </div>
  );
};

export default AddWarehouse;
