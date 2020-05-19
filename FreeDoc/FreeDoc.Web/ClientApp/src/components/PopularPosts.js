import React, { Component } from 'react';

class PopularPosts extends Component {

    render() {
        return (
            <div className="popular-posts">
                <h3 style={{ fontWeight: 'bold'}}>BÀI VIẾT XEM NHIỀU NHẤT</h3>
                <ul>
                    <li>
                        <div className="item-thumnail"></div>
                        <div className="item-title"></div>
                    </li>
                    <li>
                        <div className="item-thumnail"></div>
                        <div className="item-title"></div>
                    </li>
                    <li>
                        <div className="item-thumnail"></div>
                        <div className="item-title"></div>
                    </li>
                    <li>
                        <div className="item-thumnail"></div>
                        <div className="item-title"></div>
                    </li>
                    <li>
                        <div className="item-thumnail"></div>
                        <div className="item-title"></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PopularPosts;
