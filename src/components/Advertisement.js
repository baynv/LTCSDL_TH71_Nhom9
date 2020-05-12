import React, { Component } from 'react';

class Advertisement extends Component {

    render() {
        return (
            <div className="advertisement">
                <ul className="list-group">
                    <li className="list-group-item"><i className="fa fa-facebook-square"></i> <a href="# ">Facebook</a></li>
                    <li className="list-group-item"><i className="fa fa-youtube"></i> <a href="# ">YouTube</a></li>
                    <li className="list-group-item"><i className="fa fa-github"></i> <a href="# ">Github</a></li>
                </ul>
            </div>
        );
    }
}

export default Advertisement;
