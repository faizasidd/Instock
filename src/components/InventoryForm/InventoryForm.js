import React from "react";
import "./InventoryForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const InventoryForm = () => {
  return (
    <div>
      <form className="form__content">
        <div className="form__container">
          <h2>Item Details</h2>
          <label>Item Name</label>
          <input type="text" placeholder="Item Name"></input>
          <label>Description</label>
          <textarea
            className="form__textfield"
            placeholder="Please enter a brief item description"
          ></textarea>
          <label>Category</label>
          <select>
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
            //   disabled={true}
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
            <option>Manhattan</option>
            <option>Washington</option>
            <option>Jersey</option>
            <option>San Fran</option>
            <option>Santa Monica</option>
            <option>Seattle</option>
            <option>Miami</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
