import React , { useState, useEffect }from "react";
import axios from "axios";
import useForm from "../../utils/useForm";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import "./EditInventoryItem.scss";
import InventoryForm from "../InventoryForm/InventoryForm";
import { Link } from "react-router-dom";

const EditInventoryItem = (props) => {
  const [inventory, setInventory] = useState({});

  const fetchInventory = () => {
    axios
      .get(`http://localhost:8080/inventories/${props.match.params.inventoryId}`)
      .then((response) => {
        setInventory(response.data.inventory);
      });
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const updateFetchedInventory = (e) => {
    e.preventDefault();
    if (handleSubmit(e, inventory)) {
      axios
        .put(
          `http://localhost:8080/inventories/${props.match.params.inventoryId}`
          ,
          inventory,
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
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-inventory">
      
      <div className="add-inventory__title-container">
      <Link className="add-inventory__back-icon" to='/warehouse/2922c286-16cd-4d43-ab98-c79f698aeab0/inventory'>
        <img src={arrowBack} />
      </Link>
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
      <Link to='/warehouse/2922c286-16cd-4d43-ab98-c79f698aeab0/inventory'>
        <button className="add-inventory__button">Cancel</button>
        </Link>
        <button
          onClick={updateFetchedInventory}
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