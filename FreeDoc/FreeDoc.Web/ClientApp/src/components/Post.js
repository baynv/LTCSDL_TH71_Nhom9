import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Post.css';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="media">
                    <NavLink className="media-left" to={this.props.link}>
                        <img className="media-object" src={this.props.thumbnail} alt="thumnail" />
                    </NavLink>
                    <div className="media-body">
                        <NavLink to={this.props.link}><h3 className="media-heading">{this.props.title}</h3></NavLink>
                        <p>{this.props.uploadTime} / {this.props.comments}</p>
                    </div>
                </div>

                <hr />
            </div>
        )
    }
}
