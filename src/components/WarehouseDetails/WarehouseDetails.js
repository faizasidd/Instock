import React from "react";
import axios from "axios";
import SortIcon from "../../assets/icons/sort-24px.svg";
import RightIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import WarehouseData from "../../data/warehouses.json";
import InventoryData from "../../data/inventories.json";
import { NavLink } from "react-router-dom";

class WarehouseDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: [],
            inventory: [],
            loaded: false
        };
    }

    componentDidMount() {
        this.setState({
            details: WarehouseData.filter((warehouse) => warehouse.name === "Washington"),
            inventory: InventoryData.filter((item) => item.warehouseName === "Washington"),
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
                    <article className="warehouse-details__title-flex-container">
                        <section className="warehouse-details__title-container">
                            <div className="title-container__icon-container">
                                <img
                                    className="title-container__icon"
                                    src={ArrowBackIcon}
                                    alt="Arrow Back Icon"
                                />
                            </div>
                                
                            <h1 className="warehouse-details__title">{this.state.details[0].name}</h1>
                        </section>
                                
                        <NavLink to="/edit" className="warehouse-details__button-link">
                            <div className="button-link__icon-container">
                                <img
                                    className="button-link__icon"
                                    src={EditIcon}
                                    alt="Edit Icon"
                                />
                            </div>
                            
                            <div className="button-link__text-container">
                                <p className="button-link__text">
                                    Edit
                                </p>
                            </div>
                        </NavLink>
                    </article>

                    <article className="warehouse-details__contact-flex-container">
                        <section className="contact__address-container">
                            <p className="address__title">
                                WAREHOUSE ADDRESS:
                            </p>
                                
                            <p className="address__text">
                                {this.state.details[0].address},
                                {this.state.details[0].city},
                                {this.state.details[0].country}
                            </p>
                        </section>
                            
                        <section className="contact__info-container">
                            <div className="info__name-position">
                                <p className="info__title">
                                    CONTACT NAME:
                                </p>
                                
                                <p className="name-position__text">
                                    {this.state.details[0].contact.name}
                                </p>
                                    
                                <p className="name-position__text">
                                    {this.state.details[0].contact.position}
                                </p>
                            </div>
                                
                            <div className="info__phone-email">
                                <p className="info__title">
                                    CONTACT INFORMATION:
                                </p>
                                    
                                <p className="phone-email__text">
                                    {this.state.details[0].contact.phone}
                                </p>
                                
                                <p className="phone-email__text">
                                    {this.state.details[0].contact.email}
                                </p>
                            </div>
                        </section>
                    </article>

                    <section className="warehouse-details__title-bar">
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
                                ACTIONS
                            </p>  
                        </div>
                    </section>

                    {this.state.inventory.map((item) => {
                        const { itemName, category, status, quantity, id } = item;

                        return (
                            <article className="warehouse-details__info-flex-container" key={id}>
                                <section className="info-flex__details-container">
                                    <section className="details-container1__item-category-container">
                                        <div className="item-container__title-search">
                                            <p className="item-container__title">
                                                INVENTORY ITEM
                                            </p>
                                            
                                            {/* to={`/${id}`} */}
                                            <NavLink to="" className="item-container__search-link">
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

                                    <section className="details-container2__status-qty-container">
                                        <div className="details-container2__status-container">
                                            <p className="status__title">
                                                STATUS
                                            </p>
                                            
                                            <div className="status__text-container">
                                                <p className="status__text">
                                                    {status}
                                                </p>
                                            </div>
                                        </div>
                                            
                                        <div className="details-container2__qty-container">
                                            <p className="qty__title">
                                                QTY
                                            </p>
                                                
                                            <p className="qty__text">
                                                {quantity}
                                            </p>
                                        </div>
                                    </section>
                                </section>
                                    
                                <section className="info-flex__actions">
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

export default WarehouseDetails;