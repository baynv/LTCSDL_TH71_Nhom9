import React, { Component } from 'react';
import '../styles/SearchForm.css';

class SearchForm extends Component {

    render() {
        return (
            <div className="search-form">
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-black" type="submit">Tìm kiếm</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default SearchForm;
