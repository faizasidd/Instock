<<<<<<< HEAD
import "../WarehouseList/WarehouseList.scss";
=======
import React from "react";
import axios from "axios";
import MagnifyingGlassIcon from "../../assets/icons/search-24px.svg";
import SortIcon from "../../assets/icons/sort-24px.svg";
import RightIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import WarehouseData from "../../data/warehouses.json";
import { NavLink } from "react-router-dom";

class WarehouseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: [],
            loaded: false
        };
    }

    componentDidMount() {
        this.setState({
            details: WarehouseData,
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
                        <div className="section-titles__warehouse">
                            <p className="warehouse__text">
                                WAREHOUSE
                            </p>
                            
                            <div className="warehouse__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles__address">
                            <p className="address__text">
                                ADDRESS
                            </p>

                            <div className="address__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles__contact-name">
                            <p className="contact-name__text">
                                CONTACT NAME
                            </p>

                            <div className="contact-name__sort-button">
                                <img
                                    className="button__image"
                                    src={SortIcon}
                                    alt="Sort Icon"
                                />
                            </div>
                        </div>
                            
                        <div className="section-titles__contact-information">
                            <p className="contact-information__text">
                                CONTACT INFORMATION
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
                        
                    {this.state.details.map((detail) => {
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
                                                <p className="flex2__contact-information-text">
                                                    {phone}
                                                </p>
                                                
                                                <p className="flex2__contact-information-text">
                                                    {email}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                    
                                <section className="warehouse-list__container2">
                                    <NavLink to="/deleteItem" className="container2__link">
                                        <div className="link__button-container">
                                            <img
                                                className="button__image"
                                                src={DeleteIcon}
                                                alt="Delete Icon"
                                            />
                                        </div>
                                    </NavLink>

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
        }   return <h1>Loading...</h1>;
    }
}

export default WarehouseList;
>>>>>>> develop
