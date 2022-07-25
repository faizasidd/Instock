import React, { useState, useEffect } from "react";
import axios from "axios";
import SortIcon from "../../assets/icons/sort-24px.svg";
import RightIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import BackIcon from "../../assets/icons/arrow_back-24px.svg"
import crossButton from '../../assets/icons/close-24px.svg'
import WarehouseData from "../../data/warehouses.json";
import { NavLink, Link } from "react-router-dom";
import './WarehouseInventoryList.scss';
import Modal from 'react-modal';

const WarehouseInventoryList = (props) => {
    const [warehouse, setWarehouse] = useState({})
    const [inventories, setInventories] = useState([])

    useEffect(() => {
      getAllWarehouseInventory()
    }, [])
  
    const getAllWarehouseInventory = () => {
       axios
          .get(`http://localhost:8080/warehouses/${props.match.params.warehouseId}`)
          .then(response => {
              setWarehouse(response.data.warehouse)
              console.log(response.data.warehouse)
              setInventories(response.data.inventory)
              console.log(response.data.inventory)
            })
          .catch(error => console.log(error))
    }
    const deleteItem = (e, inventoryId) => {
        axios
            .delete(
                `http://localhost:8080/inventories/${inventoryId}`,
                
            )
            .then((response) => {
                setWarehouse(response.data)
                console.log(response);
                
            })
            .catch(error => console.log(error))
            closeModal()
    }


    // Modal code
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal () {
        setIsOpen(true);
        console.log("Working")
    }
    function closeModal () {
        setIsOpen(false);
    }
    

   
        if (warehouse && warehouse.contact) {

        
            return (

                
                <>
                <div className="warehouse-inventory__links">
                   
                    <Link to={"/"} className="warehous-inventory__button">
                            <div>
                                <img
                                    className="warehouse-inventory__back"
                                    src={BackIcon}
                                    alt="Edit Icon"
                                />
                            </div>
                        </Link>
                        <p className="warehouse-inventory__title">{warehouse.name}</p>
                    
                            <button className="warehouse-inventory__edit">
                                <Link to={`/warehouse/${warehouse.id}/inventory`} className="warehouse-inventory__button">
                                    <div className="warehouse-inventory__button-container">
                                        <img
                                                className="warehouse-inventory__edit-icon"
                                                src={EditIcon}
                                                alt="Edit Icon"
                                        />
                                        <p className="warehouse-inventory__edit-text">
                                            Edit
                                        </p>
                                    </div>
                                </Link>
                            </button>
                </div>
                        <section className="warehouse-inventory__contact-section">
                            <div className="warehouse-inventory__address-container">
                                <h3 className="warehouse-inventory__address-header">WAREHOUSE ADDRESS:</h3>
                                <p className="warehouse-inventory__address">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                            </div>
                            <div className="warehouse-inventory__contact-container">
                                <div className="warehouse-inventory__contact">
                                    <h3 className="warehouse-inventory__contact-header">CONTACT NAME:</h3>
                                    <p className="warehouse-inventory__contact-name">{warehouse.contact.name}</p>
                                    <p className="warehouse-inventory__contact-position">{warehouse.contact.position}</p>
                                </div>
                                <div className="warehouse-inventory__contact2">
                                    <h3 className="warehouse-inventory__contact-header">CONTACT INFORMATION:</h3>
                                    <p className="warehouse-inventory__contact-phone">{warehouse.contact.phone}</p>
                                    <p className="warehouse-inventory__contact-email">{warehouse.contact.email}</p>
                                </div>
                            </div>
                        </section>
                    <section className="warehouse-inventory__section-titles">
                        <div className="warehouse-inventory__title-header">
                            <p className="warehouse-inventory__inventory">
                                INVENTORY ITEM
                            </p>
                            
                            <div className="warehouse-inventory__sort-container">
                                <img
                                    className="warehouse-inventory__sort-icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="warehouse-inventory__title-header">
                            <p className="warehouse-inventory__category">
                                CATEGORY
                            </p>

                            <div className="warehouse-inventory__sort-container">
                                <img
                                    className="warehouse-inventory__sort-icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="warehouse-inventory__title-header">
                            <p className="warehouse-inventory__status">
                                STATUS
                            </p>

                            <div className="warehouse-inventory__sort-container">
                                <img
                                    className="warehouse-inventory__sort-icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="warehouse-inventory__title-header">
                            <p className="warehouse-inventory__qty">
                                QUANTITY
                            </p>

                            <div className="warehouse-inventory__sort-container">
                                <img
                                    className="warehouse-inventory__sort-icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="warehouse-inventory__title-header">
                            <p className="warehouse-inventory__actions">
                                ACTIONS
                            </p>
                        </div>
                    </section>
                        
                    {inventories.map((detail) => {
                        const { name, address, city, country, id } = warehouse;
                        const {category, description, itemName, quantity, status, warehouseName} = detail;


                        return (
                            <article className="warehouse-inventory__list">
                        
                                <section className="warehouse-inventory__list-section" key={inventories.id}>
                                    <section className="warehouse-inventory__item-status-container">
                                        
                                        <div className="warehouse-inventory__container">
                                        <p className="warehouse-inventory__mobile-header">
                                        INVENTORY ITEM
                                        </p>
                                            <Link to="" className="warehouse-inventory__link">
                                            <div className="warehouse-inventory__inventory-container">
                                                <div className="warehouse-inventory__item-container">
                                                    <p className="warehouse-inventory__link-text" >
                                                        {itemName}
                                                    </p>
                                                    <p className="warehouse-inventory__link-text-tablet" >
                                                        {itemName}
                                                    </p>
                                                </div>
                                                    
                                                <div className="warehouse-inventory__right-icon-container">
                                                    <img
                                                        className="warehouse-inventory__right-icon"
                                                        src={RightIcon}
                                                        alt="Right Icon"
                                                    />
                                                    <img
                                                        className="warehouse-inventory__right-icon-tablet"
                                                        src={RightIcon}
                                                        alt="Right Icon"
                                                    />
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                          
                                        <div className="warehouse-inventory__status-container">
                                        <p className="warehouse-inventory__mobile-header">
                                        STATUS
                                        </p>  
                                        <p className={status === "In Stock" ? "warehouse-inventory__status-text--active" : "warehouse-inventory__status-text--inactive"}>
                                            {status? status.toUpperCase(): "loading ..."}
                                        </p>
                                        
                                        </div>
                                    </section>
                                    <p className="warehouse-inventory__category-text-tablet">
                                                {category}
                                    </p>
                                         
                                    <section className="warehouse-inventory__category-quantity-container">
                                       
                                        <div className="warehouse-inventory__category-container">
                                            <p className="warehouse-inventory__mobile-header">
                                            CATEGORY
                                            </p> 
                                            <p className="warehouse-inventory__category-text">
                                                {category}
                                            </p>
                                            <p className={status === "In Stock" ? "warehouse-inventory__status-text-tablet--active" : "warehouse-inventory__status-text-tablet--inactive"}>
                                                {status? status.toUpperCase(): "loading ..."}
                                            </p>
                                        </div>
                                           
                                        <div className="warehouse-inventory__quantity-container">   
                                            <p className="warehouse-inventory__mobile-header">
                                            QUANTITY
                                            </p>  
                                            <div className="warehouse-inventory__quantity-text-container">
                                                <p  className="warehouse-inventory__category-text">
                                                    {quantity}
                                                </p>
                                                

                                            </div>
                                        </div>
                                    </section>
                                    <p  className="warehouse-inventory__quantity-text-tablet">
                                                    {quantity}
                                    </p>
                                    <section className="warehouse-inventory__edit-delete-container">
                                    {/* <Link to="/deleteItem" className="warehouse-inventory__delete-button">
                                        <div className="warehouse-inventory__delete-button-container">
                                            <img
                                                className="warehouse-inventory__delete-icon"
                                                src={DeleteIcon}
                                                alt="Delete Icon"
                                            />
                                        </div>
                                    </Link> */}
                                     <button 
                                        onClick={openModal}
                                        className="deleteIcon">
                                        <div className="link__button-container">
                                            <img
                                                className="button__image"
                                                src={DeleteIcon}
                                                alt="Delete Icon"
                                            />
                                        </div>
                                    </button>
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                className="modal"
                                                overlayClassName="overlay"
                                                contentLabel="Delete Modal"
                                                ariaHideApp={false}
                                                >
                                                <div className="cross-wrapper">
                                                    <button onClick={closeModal} className="cross">
                                                        <img 
                                                            className="cross__button"
                                                            src={crossButton}
                                                        />
                                                    </button>
                                                </div>
                                                <h2>Delete Washington warehouse?</h2>
                                                <div className="p1">Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</div>
                                                <div className="twoBtnContainer">
                                                    <button 
                                                        onClick={closeModal} 
                                                        className="cancel-warehouse__button">Cancel</button>
                                                    <button 
                                                        onClick={(e) => deleteItem(e, id)} 
                                                        className="delete-warehouse__button">Delete</button>
                                                </div>
                                                
                                            </Modal>

                                    <Link to={`/inventory/edit/${id}`} className="warehouse-inventory__edit-button">
                                        <div className="warehouse-inventory__edit-button-container">
                                            <img
                                                className="warehouse-inventory__edit-icon"
                                                src={EditIcon}
                                                alt="Edit Icon"
                                            />
                                        </div>
                                    </Link>
                                </section>
                                </section>
                                    
                                
                            </article>
                        );
                     })}
                </>
            );
        } else {
            return <h1>Loading...</h1>;
        } 
    }

export default WarehouseInventoryList;