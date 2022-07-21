import React from "react";
import "./InventoryForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const InventoryForm = (props) => {
  return (
    <div>
      <form
        className="form__content"
        onSubmit={(e) => props.handleSubmit(e, props.inventory)}
      >
        <div className="form__container">
          <h2>Item Details</h2>
          <label>Item Name</label>
          <input
            type="text"
            name="itemName"
            value={props.inventory.itemName}
            placeholder="Item Name"
            onChange={props.handleInputChange}
          ></input>
          <label>Description</label>
          <textarea
            className="form__textfield"
            name="description"
            value={props.inventory.description}
            placeholder="Please enter a brief item description"
            onChange={props.handleInputChange}
          ></textarea>
          <label>Category</label>
          <select onChange={props.handleInputChange} name="category">
            <option>Please select</option>
            <option value="Electronics">Electronics</option>
            <option value="Gears">Gears</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div className="form__container">
          <h2>Item Availability</h2>
          <label>Status</label>
          <div>
            <input
              type="radio"
              name="select"
              value="In Stock"
            />
            <span>In Stock</span>
          </div>
          <div>
            <input type="radio" name="select" value="Out of Stock" />
            <span>Out of Stock</span>
          </div>
          <input type="number" value="0"></input>
          <label>Warehouse</label>
          <select>
            <option>Please select</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Washington">Washington</option>
            <option value="Jersey">Jersey</option>
            <option value="San Fran">San Fran</option>
            <option value="Santa Monica">Santa Monica</option>
            <option value="Seattle">Seattle</option>
            <option value="Miami">Miami</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
