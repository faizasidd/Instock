import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InventoryList.scss";
import '../WarehouseList/WarehouseList.scss'
import SortIcon from "../../assets/icons/sort-24px.svg";
import MagnifyingGlassIcon from "../../assets/icons/search-24px.svg";
import RightIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import InventoryData from "../../data/inventories.json";
import { Link } from "react-router-dom";
import Modal from 'react-modal'
import crossButton from '../../assets/icons/close-24px.svg'
Modal.setAppElement('#root');

const InventoryList = (props) => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
      getAllInventories()
    }, [])

    const getAllInventories = () => {
        axios
            .get(`http://localhost:8080/inventories/?warehouseId=${props.match.params.warehouseId}/`)
            .then(response => {
                setInventories(response.data)
                console.log(response.data)

            })
            .catch(error => console.log(error))
    }
    const deleteInventory = (e, inventories) => {
        axios
            .delete(
                `http://localhost:8080/inventories/{inventoryId}`,
                inventories,
            )
            .then((response) => {
                setInventories(response.data)
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
 

    if (inventories !== '') {
        return (

                <>
                    <article className="inventory-list__title-flex-container">
                        <h1 className="inventory-list__title">Inventory</h1>

                        <section className="inventory-list__search-add-container">
                            <div className="search-add-container__search-bar">
                                <input
                                    className="search-bar__input"
                                    type="text"
                                    name="search-bar__input"
                                    id="search-bar__input"
                                    placeholder="Search..."
                                ></input>

                                <div className="search-bar__icon-container">
                                    <img
                                        className="search-bar__icon"
                                        src={MagnifyingGlassIcon}
                                        alt="Magnifying Glass Icon"
                                    />
                                </div>
                            </div>
                            
                            <button className="search-add-container__add-button">
                                <Link to="/inventory/add" className="add-button__link">
                                    <div className="link__text-container">
                                        <p className="link__text">
                                            + Add New Item
                                        </p>
                                    </div>
                                </Link>
                            </button>
                        </section>
                    </article>
                    
                    <section className="inventory-list__title-bar">
                        <div className="title-bar__title-sort-container">
                            <p className="title-bar__title">
                                INVENTORY ITEM
                            </p>
                            
                            <div className="sort-button__icon-container">
                                <img
                                    className="sort-button__icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="title-bar__title-sort-container">
                            <p className="title-bar__title">
                                CATEGORY
                            </p>

                            <div className="sort-button__icon-container">
                                <img
                                    className="sort-button__icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="title-bar__title-sort-container">
                            <p className="title-bar__title">
                                STATUS
                            </p>

                            <div className="sort-button__icon-container">
                                <img
                                    className="sort-button__icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="title-bar__title-sort-container">
                            <p className="title-bar__title">
                                QTY
                            </p>

                            <div className="sort-button__icon-container">
                                <img
                                    className="sort-button__icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>

                        <div className="title-bar__title-sort-container">
                            <p className="title-bar__title">
                                WAREHOUSE
                            </p>

                            <div className="sort-button__icon-container">
                                <img
                                    className="sort-button__icon"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>    
                            
                        <div className="title-bar__title-sort-container">
                            <p className="title-bar__title">
                                ACTIONS
                            </p>  
                        </div>
                    </section>

                    {inventories.map((item) => {
                        const { id, warehouseName, itemName, category, status, quantity } = item;

                        return (
                            <article className="inventory-list__item-details" key={id}>
                                <section className="item-details__flex-container">
                                    <section className="flex-container1__item-category-container">
                                        <div className="item-container__title-search">
                                            <p className="item-container__title">
                                                INVENTORY ITEM
                                            </p>
                                                
                                            <Link to={`/inventory/${id}`} className="item-container__search-link">
                                                <div className="search-link__text-container">
                                                    <p className="search-link__text">
                                                        {itemName}
                                                    </p>
                                                </div>
                                                    
                                                <div className="search-link__icon-container">
                                                    <img
                                                        className="search-link__icon"
                                                        src={RightIcon}
                                                        alt="Right Icon"
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                            
                                        <div className="item-container__category-container">
                                            <p className="category__title">
                                                CATEGORY
                                            </p>

                                            <p className="category__text">
                                                {category}
                                            </p>
                                        </div>
                                    </section>

                                    <section className="flex-container2__status-qty-warehouse-container">
                                        <div className="flex-container2__status-container">
                                            <p className="status__title">
                                                STATUS
                                            </p>
                                            
                                            <div className="status__text-container">
                                                <p className="status__text">
                                                    {status}
                                                </p>
                                            </div>
                                        </div>
                                            
                                        <div className="flex-container2__qty-container">
                                            <p className="qty__title">
                                                QTY
                                            </p>
                                                
                                            <p className="qty__text">
                                                {quantity}
                                            </p>
                                        </div>
                                            
                                        <div className="flex-container2__warehouse-container">
                                            <p className="warehouse__title">
                                                WAREHOUSE
                                            </p>
                                                
                                            <p className="warehouse__text">
                                                {warehouseName}
                                            </p>
                                        </div>
                                    </section>
                                </section>
                                    
                                <section className="item-details__actions">
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
                                                <h2>Delete inventory?</h2>
                                                <div className="p1">Please confirm that you’d like to delete {itemName} from the inventory list. You won’t be able to undo this action.</div>
                                                <div className="twoBtnContainer">
                                                    <button 
                                                        onClick={closeModal} 
                                                        className="cancel-warehouse__button">Cancel</button>
                                                    <button 
                                                        onClick={() => deleteInventory(id)}
                                                        className="delete-warehouse__button">Delete</button>
                                                </div>
                                                
                                            </Modal>

                                    <Link to={`/inventory/edit/${id}`} className="actions__link">
                                        <div className="actions-link__icon-container">
                                            <img
                                                className="actions-link__icon"
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
        }   return <h1>Loading...</h1>;
    }


export default InventoryList;