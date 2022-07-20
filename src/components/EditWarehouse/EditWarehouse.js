import React, { useState } from "react";
import "./EditWarehouse.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import useForm from "../../utils/useForm";

const EditWarehouse = () => {
  // const [warehouse, setWarehouse] = useState({
  //   id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
  //   name: "Washington",
  //   address: "33 Pearl Street SW",
  //   city: "Washington",
  //   country: "USA",
  //   contact: {
  //     name: "Greame Lyon",
  //     position: "Warehouse Manager",
  //     phone: "+1 (646) 123-1234",
  //     email: "glyon@instock.com",
  //   },
  // });

  const [warehouse, setWarehouse] = useState({
    id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    name: "Washington",
    address: "33 Pearl Street SW",
    city: "Washington",
    country: "USA",
    contactName: "Greame Lyon", //I flattened the contact part - this will have to be adjusted in the backend
    contactPosition: "Manager",
    contactPhone: "+1 (646) 123-1234",
    contactEmail: "glyon@instock.com",
  });

  const { handleChange, values, errors, handleSubmit } = useForm();

  const handleInputChange = (e) => {
    handleChange(e);
    setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
  };

  const isEnabled = errors.length === 0;

  return (
    <div className="edit-warehouse">
      <div className="edit-warehouse__title-container">
        <img src={arrowBack} />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <div className="edit-warehouse__form-container">
        <WarehouseForm
          handleInputChange={handleInputChange}
          warehouse={warehouse}
          setWarehouse={setWarehouse}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="edit-warehouse__button-container">
        <button className="edit-warehouse__button">Cancel</button>
        <button
          // disabled={!isEnabled}
          onClick={(e) => handleSubmit(e, warehouse)}
          type="submit"
          value="submit"
          className="edit-warehouse__button--save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditWarehouse;
