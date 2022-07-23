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

const WarehouseInventoryList = () => {
    const [warehouses, setWarehouses] = useState('')

    useEffect(() => {
      getAllWarehouseInventory()
    }, [])
  
    const getAllWarehouseInventory = () => {
       axios
          .get('http://localhost:8080/warehouses')
          .then(response => {
              setWarehouses(response.data)
              console.log(response.data)
              
            })
          .catch(error => console.log(error))
    }

    console.log(warehouses)
        if (warehouses !== '') {
            return (
                <>
                <div className="warehouse-list__title-container">
                   
                    <Link to="/" className="button__link">
                            <div>
                                <img
                                    className="button__image"
                                    src={BackIcon}
                                    alt="Edit Icon"
                                />
                            </div>
                        </Link>
                    
                            <button className="container2__add-button">
                                <Link to="/edit-warehouse" className="button__link">
                                    <div className="warehouse-list__button">
                                        <img
                                                className="button__image"
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
                                <h3 className="warehouse-text warehouse-text__address">WAREHOUSE ADDRESS:</h3>
                            <div className="warehouse-text__container">
                                <h3 className="warehouse-text warehouse-text__contact">CONTACT NAME:</h3>
                                <h3 className="warehouse-text">CONTACT INFORMATION:</h3>
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
                        
                    {warehouses.map((detail) => {
                        const { name: warehouse, address, city, country, id } = detail;
                        const { name, phone, email } = detail.contact;

                        return (
                            <article className="warehouse-list" key={id}>
                        
                                <section className="warehouse-list__container1">
                                    <section className="container1__flex1">
                                        
                                        <div className="flex1__warehouse">
                                        <p className="warehouse__text-mobile">
                                        INVENTORY ITEM
                                        </p>
                                            {/* to={`/${id}`} */}
                                            <Link to="" className="warehouse__link">
                                            <div className="warehouse-list__inventory-container">
                                                <div className="link__container">
                                                    <p className="link__text">
                                                        {warehouse}
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
                                                Placeholder
                                        </p>
                                        </div>
                                    </section>
                                         
                                    <section className="container1__flex2">
                                       
                                        <div className="flex2__contact-name">
                                            <p className="warehouse__text-mobile">
                                            CATEGORY
                                            </p> 
                                            <p className="flex2__contact-name-text">
                                                Placeholder
                                            </p>
                                        </div>
                                           
                                        <div className="flex2__contact-information">   
                                            <p className="warehouse__text-mobile">
                                            QUANTITY
                                            </p>  
                                            <div className="contact-information__container">
                                                <p className="flex2__contact-information-text">
                                                    Placeholder
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