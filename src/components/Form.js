import React, { Component } from 'react';

class PopularPosts extends Component {

    render() {
        return (
            <div className="input-group">
                <input type="text" class="form-control" placeholder="Tìm kiếm..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
            </div>
        );
    }
}

export default PopularPosts;
