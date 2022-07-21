import React, { useState } from "react";
import "./InventoryForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";
import dropdownIcon from "../../assets/icons/arrow_drop_down-24px.svg";

const InventoryForm = (props) => {
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <form
        className="inventory-form__content"
        onSubmit={(e) => props.handleSubmit(e, props.inventory)}
      >
        <div className="inventory-form__container">
          <h2 className="inventory-form__title">Item Details</h2>
          <label className="inventory-form__label">Item Name</label>
          <input
            type="text"
            name="itemName"
            className="inventory-form__input-field"
            value={props.inventory.itemName}
            placeholder="Item Name"
            onChange={props.handleInputChange}
          ></input>
          {props.errors.itemName && (
            <div className="inventory-form__error">
              <img src={errorIcon} className="inventory-form__error-icon" />
              <p>{props.errors.itemName}</p>
            </div>
          )}
          <label className="inventory-form__label">Description</label>
          <textarea
            className="inventory-form__textfield"
            name="description"
            value={props.inventory.description}
            placeholder="Please enter a brief item description..."
            onChange={props.handleInputChange}
          ></textarea>
          {props.errors.description && (
            <div className="inventory-form__error">
              <img src={errorIcon} className="inventory-form__error-icon" />
              <p>{props.errors.description}</p>
            </div>
          )}

          <label className="inventory-form__label">Category</label>
          <select
            onChange={props.handleInputChange}
            name="category"
            className="inventory-form__dropdown"
          >
            <option>Please select</option>
            <option value="Electronics">Electronics</option>
            <option value="Gears">Gears</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div className="form__container">
          <h2 className="inventory-form__title">Item Availability</h2>

          <label className="inventory-form__label">Status</label>
          <div className="inventory-form__radio-button-container">
            <div onClick={() => setHidden(false)}>
              <input
                type="radio"
                name="status"
                value="In Stock"
                onChange={props.handleInputChange}
              />

              <span className="inventory-form__label--unbolded">In stock</span>
            </div>
            <div onClick={() => setHidden(true)}>
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                onChange={props.handleInputChange}
              />
              <span className="inventory-form__label--unbolded">
                Out of stock
              </span>
            </div>
          </div>
          {!hidden ? (
            <div>
              <label className="inventory-form__label">Quantity</label>
              <input
                type="number"
                value={props.inventory.quantity}
                name="quantity"
                className="inventory-form__input-field"
                onChange={props.handleInputChange}
              ></input>
              {props.errors.quantity && (
                <div className="inventory-form__error">
                  <img src={errorIcon} className="inventory-form__error-icon" />
                  <p>{props.errors.quantity}</p>
                </div>
              )}
            </div>
          ) : null}

          <label className="inventory-form__label">Warehouse</label>
          <select
            onChange={props.handleInputChange}
            name="warehouseName"
            className="inventory-form__dropdown"
          >
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
