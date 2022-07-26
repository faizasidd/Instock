import React from "react";
import axios from "axios";
import "./InventoryItemDetails.scss";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import InventoryData from "../../data/inventories.json";
import { Link } from "react-router-dom";

class InventoryItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: {},
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:8080/inventories/${this.props.match.params.inventoryId}`)
            .then(response => {
                const inventory = response.data[0];
                this.setState({ inventory })
            })    
        };

    render() {
            return (
                <>
                    <article className="item-details__title-flex-container">
                        <section className="container1__title-icon-container">
                            <Link to="/inventory-details" className="container1__back-link">    
                                <div className="container1__icon-container">
                                    <img
                                        className="container1__icon"
                                        src={ArrowBackIcon}
                                        alt="Arrow Back Icon"
                                    />
                                </div>
                            </Link>
                                
                            <h1 className="container1__title">{this.state.inventory.itemName}</h1>
                        </section>
                                
                        <Link to="/edit-item" className="container2__button-link">
                            <div className="button-link__image-container">
                                <img
                                    className="button-link__image"
                                    src={EditIcon}
                                    alt="Edit Icon"
                                />
                            </div>
                            
                            <div className="button-link__text-container">
                                <p className="button-link__text">
                                    Edit
                                </p>
                            </div>
                        </Link>
                    </article>

                    <article className="item-details__information-container">
                        <section className="information-container__flex-container1">
                            <div className="flex-container1__description">
                                <p className="description__title">
                                    ITEM DESCRIPTION:
                                </p>

                                <p className="description__text">
                                    {this.state.inventory.description}
                                </p>
                            </div>

                            <div className="flex-container1__category">
                                <p className="category__title">
                                    CATEGORY:
                                </p>

                                <p className="category__text">
                                    {this.state.inventory.category}
                                </p>
                            </div>
                        </section>
                            
                        <section className="information-container__flex-container2">
                            <div className="flex-container2__status-warehouse">
                                <div className="flex-container2__status">
                                    <p className="status__title">
                                        STATUS:
                                    </p>

                                    <div className="status__text-container">
                                        <p className="status__text">
                                            {this.state.inventory.status}
                                        </p>
                                    </div>
                                </div>
                                    
                                <div className="flex-container2__warehouse">
                                    <p className="warehouse__title">
                                        WAREHOUSE:
                                    </p>

                                    <p className="warehouse__text">
                                        {this.state.inventory.warehouseName}
                                    </p>
                                </div>
                            </div>
                                
                            <div className="flex-container2__quantity">
                                <p className="quantity__title">
                                    QUANTITY:
                                </p>

                                <p className="quantity__text">
                                    500
                                </p>
                            </div>
                        </section>
                    </article>
                </>
            );

    }
}

export default InventoryItemDetails;