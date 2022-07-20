import React from "react";

class WarehouseList extends React.Component {
  render() {

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
                    <div className="button__image-container">
                        <img
                            className="button__image"
                            src={AdditionIcon}
                            alt="Addition Icon"
                        />
                    </div>
                    
                    <NavLink to="/upload" className="button__link">
                        <div className="button__text-container">
                            <p className="button__text">
                                Add New Warehouse
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
            
        <article className="warehouse-list">
            <section className="warehouse-list__container1">
                <section className="container1__flex1">
                    <div className="flex1__warehouse">
                        <p className="warehouse__title">
                            WAREHOUSE
                        </p>
                            
                        <NavLink to="/upload" className="warehouse__link">
                            <div className="link__container">
                                <p className="link__text">
                                    Manhattan
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
                            503 Broadway, New York, USA
                        </p>
                    </div>
                </section>

                <section className="container1__flex2">
                    <div className="flex2__contact-name">
                        <p className="contact-name__title">
                            CONTACT NAME
                        </p>
                        
                        <p className="flex2__contact-name-text">
                            Parmin Aujla
                        </p>
                    </div>
                        
                    <div className="flex2__contact-information">
                        <p className="contact-information__title">
                            CONTACT INFORMATION
                        </p>
                            
                        <div className="contact-information__container">
                            <p className="flex2__contact-information-text">
                                +1 (629) 555-0129
                            </p>
                            
                            <p className="flex2__contact-information-text">
                                paujla@instock.com
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
      </>
    );
  }
}

export default WarehouseList;