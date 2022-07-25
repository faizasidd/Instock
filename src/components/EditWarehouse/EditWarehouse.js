import React, { useState, useEffect } from "react";
import "./EditWarehouse.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import useForm from "../../utils/useForm";
import axios from "axios";
import { Link } from "react-router-dom";

const EditWarehouse = (props) => {
  const [warehouse, setWarehouse] = useState({});

  const fetchWarehouse = () => {
    axios
      .get(`http://localhost:8080/warehouses/${props.match.params.warehouseId}`)
      .then((response) => {
        setWarehouse(response.data.warehouse);
      });
  };

  useEffect(() => {
    fetchWarehouse();
  }, []);


  const updateFetchedWarehouse = (e) => {
    e.preventDefault();
    if (handleSubmit(e, warehouse)) {
      axios
        .put(
          `http://localhost:8080/warehouses/${props.match.params.warehouseId}`,
          warehouse,
          {
            "Content-Type": "application/json",
          }
        )
        .then((response) => {
          console.log(response);
        });
    }
  };

  const { handleChange, values, errors, handleSubmit } = useForm();

  const handleInputChange = (e) => {
    handleChange(e);
    setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
  };

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
        <Link to='/'>
        <button className="edit-warehouse__button">Cancel</button>
        </Link>
        <button
          onClick={updateFetchedWarehouse}
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
