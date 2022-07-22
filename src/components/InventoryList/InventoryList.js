import React from "react";
import axios from "axios";
import SortIcon from "../../assets/icons/sort-24px.svg";
import MagnifyingGlassIcon from "../../assets/icons/search-24px.svg";
import RightIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import InventoryData from "../../data/inventories.json";
import { NavLink } from "react-router-dom";

class InventoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inventory: [],
            loaded: false
        };
    }

    componentDidMount() {
        this.setState({
            inventory: InventoryData,
            loaded: true
        });
    }

    /*
    componentDidUpdate(prevProps) {

        if (prevProps.match.params.id !== this.props.match.params.id) {
       
            let VideoId;
            axios
                .get(`https://project-2-api.herokuapp.com/videos/?api_key=6eb81f40-ff68-4c0b-aa13-b2b7e9a62bf1`)
                .then((response) => {
                    VideoId = this.props.match.params.id;
                    const filteredVideosArray = response.data.filter((video) => VideoId !== video.id);
            
                    this.setState({
                        videos: response.data,
                        filteredVideosArray: filteredVideosArray,
                    });

                    axios
                        .get(`https://project-2-api.herokuapp.com/videos/${VideoId}/?api_key=6eb81f40-ff68-4c0b-aa13-b2b7e9a62bf1`)
                        .then((responseTwo) => {
                        
                            this.setState({
                                details: responseTwo.data,
                                loaded: true,
                            });
                        })
                        .catch((error) => { console.error(error.responseTwo); });
                })
                .catch((error) => { console.error(error.responseTwo); });
        }
    }
    */

    render() {
        if (this.state.loaded) {
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
                                <NavLink to="/add-item" className="add-button__link">
                                    <div className="link__text-container">
                                        <p className="link__text">
                                            + Add New Item
                                        </p>
                                    </div>
                                </NavLink>
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

                    {this.state.inventory.map((item) => {
                        const { id, warehouseName, itemName, category, status, quantity } = item;

                        return (
                            <article className="inventory-list__item-details" key={id}>
                                <section className="item-details__flex-container">
                                    <section className="flex-container1__item-category-container">
                                        <div className="item-container__title-search">
                                            <p className="item-container__title">
                                                INVENTORY ITEM
                                            </p>
                                                
                                            <NavLink to="/item" className="item-container__search-link">
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
                                            </NavLink>
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
                                    <NavLink to="/delete-item" className="actions__link">
                                        <div className="actions-link__icon-container">
                                            <img
                                                className="actions-link__icon"
                                                src={DeleteIcon}
                                                alt="Delete Icon"
                                            />
                                        </div>
                                    </NavLink>

                                    <NavLink to="/edit-item" className="actions__link">
                                        <div className="actions-link__icon-container">
                                            <img
                                                className="actions-link__icon"
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
        }   return <h1>Loading...</h1>;
    }
}

export default InventoryList;