import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/Category.css';

import Item from './Item';

export default class Category extends Component {
    render() {

        //var match = this.props.match;

        let items = this.props.items;
        let elmItem = items.map((item, index) => {
            return (
                <Item
                    key={index}
                    thumbnail={item.thumbnail}
                    name={item.name}
                    uploadTime={item.upload_time}
                    comments={item.comments}
                    link={item.link}
                />
            );
        });

        return (
            <div className="category">
                <div className="title">
                    <Link to={this.props.link}> <h2>{this.props.name}</h2> </Link>
                </div>

                <ul className="items">
                    {elmItem}
                </ul>

            </div>
        );
    }
}
