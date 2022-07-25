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
            inventory: [],
            loaded: false,
        };
        console.log(InventoryData[0].itemName);
    }

    componentDidMount() {
        this.setState({
            inventory: InventoryData.filter((item) => item.warehouseName === "Manhattan" && item.itemName === "Television"),
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
                    <article className="item-details__title-flex-container">
                        <section className="container1__title-icon-container">
                            <Link to="/warehouse/:warehouseId" className="container1__back-link">    
                                <div className="container1__icon-container">
                                    <img
                                        className="container1__icon"
                                        src={ArrowBackIcon}
                                        alt="Arrow Back Icon"
                                    />
                                </div>
                            </Link>
                                
                            <h1 className="container1__title">{this.state.inventory[0].itemName}</h1>
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
                                    {this.state.inventory[0].description}
                                </p>
                            </div>

                            <div className="flex-container1__category">
                                <p className="category__title">
                                    CATEGORY:
                                </p>

                                <p className="category__text">
                                    {this.state.inventory[0].category}
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
                                            {this.state.inventory[0].status}
                                        </p>
                                    </div>
                                </div>
                                    
                                <div className="flex-container2__warehouse">
                                    <p className="warehouse__title">
                                        WAREHOUSE:
                                    </p>

                                    <p className="warehouse__text">
                                        {this.state.inventory[0].warehouseName}
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
        }   return <h1>Loading...</h1>;
    }
}

export default InventoryItemDetails;