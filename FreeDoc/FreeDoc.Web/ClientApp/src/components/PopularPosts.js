import React, { Component } from 'react';

export default class PopularPosts extends Component {

    render() {
        return (
            <div className="popular-posts">
                <h3 style={{ fontWeight: 'bold'}}>BÀI VIẾT XEM NHIỀU NHẤT</h3>
                
                <div className="media">
                    <a className="media-left" href="# ">
                        <img className="media-object item-thumnail" src={require('../images/pexels-photo.jpg')} alt="thumnail" style={{width: '80px', height:'80px'}}/>
                    </a>
                    <div className="media-body">
                        <a href="# "><h4 className="media-heading">Media heading</h4></a>
                    </div>
                </div>
                
            </div>
        );
    }
}
