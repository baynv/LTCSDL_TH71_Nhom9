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
                <div className="form-group">
                    Từ khóa hot: <span className="badge">C++</span> <span className="badge">TOEIC</span> <span className="badge">Poster</span> <span className="badge">Intro Logo</span>
                </div>
            </div>
        );
    }
}

export default SearchForm;
