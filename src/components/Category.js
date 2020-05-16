import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/Category.css';

import Item from './Item';

class Category extends Component {
    render() {
        let items = this.props.items;
        let elmItem = items.map((item, index) => {
            return (
                <Item
                    key={index}
                    thumnail={item.thumnail}
                    name={item.name}
                    uploadTime={item.upload_time}
                    comments={item.comments}
                />
            );
        });

        return (
            <div className="category">

                <div className="title">
                    <Link to={this.props.link}> <h2>{this.props.name}</h2> </Link>
                </div>

                <ul className="documents">
                    {elmItem}
                </ul>

            </div>
        );
    }
}
export default Category;
