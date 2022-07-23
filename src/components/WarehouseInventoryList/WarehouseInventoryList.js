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

    // console.log(warehouse)
        if (warehouse && warehouse.contact) {
            return (
                <>
                <div className="warehouse-list__title-container">
                   
                    <Link to="/" className="button__link">
                            <div className="">
                                <img
                                    className="button__image"
                                    src={BackIcon}
                                    alt="Edit Icon"
                                />
                            </div>
                        </Link>
                        <p className="warehouse-list__title">{warehouse.name}</p>
                    
                            <button className="container2__add-button">
                                <Link to="/edit-warehouse" className="button__link">
                                    <div className="warehouse-list__button">
                                        <img
                                                className="button__image edit-icon"
                                                src={EditIcon}
                                                alt="Edit Icon"
                                        />
                                        <p className="button__text-edit">
                                            Edit
                                        </p>
                                    </div>
                                </Link>
                            </button>
                </div>
                        <section className="warehouse-list__contact">
                            <div className="address-container">
                                <h3 className="warehouse-text warehouse-text__address">WAREHOUSE ADDRESS:</h3>
                                <p className="address-text">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                            </div>
                            <div className="warehouse-text__container">
                                <div className="contact-name">
                                <h3 className="warehouse-text  warehouse-text__contact">CONTACT NAME:</h3>
                                <p className="warehouse-list__text">{warehouse.contact.name}</p>
                                <p className="warehouse-list__text">{warehouse.contact.position}</p>
                                </div>
                                <div>
                                <h3 className="warehouse-text">CONTACT INFORMATION:</h3>
                                <p className="warehouse-list__text">{warehouse.contact.phone}</p>
                                <p className="warehouse-list__text">{warehouse.contact.email}</p>
                                </div>
                            </div>
                        </section>
                    <section className="warehouse-list__section-titles">
                        <div className="section-titles__warehouse">
                            <p className="warehouse__text">
                                INVENTORY ITEM
                            </p>
                            
                            <div className="warehouse__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles__category">
                            <p className="address__text">
                                CATEGORY
                            </p>

                            <div className="address__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles__status">
                            <p className="contact-name__text">
                                STATUS
                            </p>

                            <div className="contact-name__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles__qty">
                            <p className="contact-information__text">
                                QTY
                            </p>

                            <div className="contact-information__button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles__actions">
                            <p className="actions__text">
                                ACTIONS
                            </p>
                        </div>
                    </section>
                        
                    {inventories.map((detail) => {
                        const { name, address, city, country, id } = warehouse;
                        const {category, description, itemName, quantity, status, warehouseName} = detail;


                        return (
                            <article className="warehouse-list">
                        
                                <section className="warehouse-list__container1" key={inventories.id}>
                                    <section className="container1__flex1">
                                        
                                        <div className="flex1__warehouse">
                                        <p className="warehouse__text-mobile inventory-title">
                                        INVENTORY ITEM
                                        </p>
                                            <Link to="" className="warehouse__link">
                                            <div className="warehouse-list__inventory-container">
                                                <div className="link__container">
                                                    <p className="link__text " >
                                                        {itemName}
                                                    </p>
                                                </div>
                                                    
                                                <div className="link__image-container">
                                                    <img
                                                        className="link__image"
                                                        src={RightIcon}
                                                        alt="Right Icon"
                                                    />
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                          
                                        <div className="flex1__address">
                                        <p className="warehouse__text-mobile">
                                        STATUS
                                        </p>  
                                        <p className="flex1__address-text">
                                                {status}
                                        </p>
                                        </div>
                                    </section>
                                         
                                    <section className="container1__flex2">
                                       
                                        <div className="flex2__contact-name">
                                            <p className="warehouse__text-mobile">
                                            CATEGORY
                                            </p> 
                                            <p className="category-text">
                                                {category}
                                            </p>
                                        </div>
                                           
                                        <div className="flex2__contact-information">   
                                            <p className="warehouse__text-mobile">
                                            QUANTITY
                                            </p>  
                                            <div className="contact-information__container">
                                                <p className="flex2__contact-information-text">
                                                    {quantity}
                                                </p>

                                            </div>
                                        </div>
                                    </section>
                                </section>
                                    
                                <section className="warehouse-list__container2">
                                    <Link to="/deleteItem" className="container2__link">
                                        <div className="link__button-container">
                                            <img
                                                className="button__image"
                                                src={DeleteIcon}
                                                alt="Delete Icon"
                                            />
                                        </div>
                                    </Link>

                                    <Link to="/editItem" className="container2__link">
                                        <div className="link__button-container">
                                            <img
                                                className="button__image-edit"
                                                src={EditIcon}
                                                alt="Edit Icon"
                                            />
                                        </div>
                                    </Link>
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