import React from 'react';

export default function Search(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.search();
    };

    return (
        <div>
            <div className="container">
                <form className="row g-3 justify-content-center align-items-center">
                    <div className="col-auto">
                        <label htmlFor="cityInput" className="visually-hidden">City</label>
                        <div className="input-group">
                            <button type="button" title='Get current location' className="btn btn-outline-secondary" onClick={props.location}>
                                <i className="fas fa-map-marker-alt"></i>
                            </button>
                            <input type="text" className="form-control" onChange={props.change} id="cityInput" placeholder="City" value={props.city} name='city' />
                            <button type="button" className="btn btn-outline-secondary fa fa-search" onClick={props.searchCity}></button>
                        </div>
                    </div>
                   or
                    <div className="col-auto">
                        <input type="text" className="form-control" onChange={props.change} id="latitudeInput" placeholder="Latitude" value={props.lat} name='lat' />
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" onChange={props.change} id="longitudeInput" placeholder="Longitude" value={props.long} name='long' />
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-outline-secondary fa fa-search mb-3 mt-2" onClick={handleSubmit}></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
