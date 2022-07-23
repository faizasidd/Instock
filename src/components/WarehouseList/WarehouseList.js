import React, { useState, useEffect } from "react";
import axios from "axios";
import MagnifyingGlassIcon from "../../assets/icons/search-24px.svg";
import SortIcon from "../../assets/icons/sort-24px.svg";
import RightIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import crossButton from '../../assets/icons/close-24px.svg'
import { NavLink } from "react-router-dom";
import './WarehouseList.scss'
import Modal from 'react-modal'
Modal.setAppElement('#root');

const WarehouseList = () => {
    const [warehouses, setWarehouses] = useState('')

    useEffect(() => {
      getAllWarehouses()
    }, [])
  
    const getAllWarehouses = () => {
        axios
            .get('http://localhost:8080/warehouses')
            .then(response => {
                setWarehouses(response.data)
                console.log(response.data)
              
            })
            .catch(error => console.log(error))
    }

    const deleteWarehouse = (e, warehouse) => {
        axios
            .delete(
                `http://localhost:8080/warehouses/warehouseId`,
                warehouse,
            )
            .then((response) => {
                setWarehouses(response.data)
                console.log(response);
            })
            .catch(error => console.log(error))
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
        if (warehouses !== '') {
            return (
                <>
                    <article className="warehouse-list__title-flex-container">
                        <h1 className="warehouse-list__title">Warehouses</h1>

                        <section className="warehouse-list__search-add-container">
                            <div className="container1__search-bar">
                                <input
                                    className="container1__search"
                                    type="text"
                                    name="container1__search"
                                    id="container1__search"
                                    placeholder="Search..."
                                ></input>

                                <div className="container1__image-container">
                                    <img
                                        className="container1__image"
                                        src={MagnifyingGlassIcon}
                                        alt="Magnifying Glass Icon"
                                    />
                                </div>
                            </div>
                            
                            <button className="container2__add-button">
                                <NavLink to="/add-warehouse" className="button__link">
                                    <div className="button__text-container">
                                        <p className="button__text">
                                            + Add New Warehouse
                                        </p>
                                    </div>
                                </NavLink>
                            </button>
                        </section>
                    </article>
                        
                    <section className="warehouse-list__section-titles">
                        <div className="section-titles">
                            <p className="section-titles__text">
                                WAREHOUSE
                            </p>
                            
                            <div className="section-titles__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles">
                            <p className="section-titles__text">
                                ADDRESS
                            </p>
                            
                            <div className="section-titles__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles">
                            <p className="section-titles__text">
                                CONTACT NAME
                            </p>
                            
                            <div className="section-titles__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles">
                            <p className="section-titles__text">
                                CONTACT INFORMATION
                            </p>
                            
                            <div className="section-titles__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles">
                            <p className="section-titles__text">
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
                                            <p className="warehouse__title">
                                                WAREHOUSE
                                            </p>
                                            {/* to={`/${id}`} */}
                                            <NavLink to="" className="warehouse__link">
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
                                            </NavLink>
                                        </div>
                                            
                                        <div className="flex1__address">
                                            <p className="address__title">
                                                ADDRESS
                                            </p>

                                            <p className="flex1__address-text">
                                                {address}, {city}, {country}
                                            </p>
                                        </div>
                                    </section>

                                    <section className="container1__flex2">
                                        <div className="flex2__contact-name">
                                            <p className="contact-name__title">
                                                CONTACT NAME
                                            </p>
                                            
                                            <p className="flex2__contact-name-text">
                                                {name}
                                            </p>
                                        </div>
                                            
                                        <div className="flex2__contact-information">
                                            <p className="contact-information__title">
                                                CONTACT INFORMATION
                                            </p>
                                                
                                            <div className="contact-information__container">
                                                <p className="flex2__contact-information-phone">
                                                    {phone}
                                                </p>
                                                
                                                <p className="flex2__contact-information-email">
                                                    {email}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                    
                                <section className="warehouse-list__container2">
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
                                                        onClick={() => deleteWarehouse(warehouse.id)} 
                                                        className="delete-warehouse__button">Delete</button>
                                                </div>
                                                
                                            </Modal>
                                    <NavLink to="/editItem" className="container2__link">
                                        <div className="link__button-container">
                                            <img
                                                className="button__image"
                                                src={EditIcon}
                                                alt="Edit Icon"
                                            />
                                        </div>
                                    </NavLink>
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

export default WarehouseList;
