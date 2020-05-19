import React, { Component } from 'react';
import '../styles/Item.css';

export default class Item extends Component {
	
	render() {
		return (
			<li>
				<div className="item">
					<a href="# ">
						<img src={require('../images/pexels-photo.jpg')} alt="thumnail"/>
					</a>
					<div className="file-name">
						{this.props.name}
                    </div>
					<hr />
					<div className="info">
						<span>{this.props.uploadTime} / {this.props.comments}</span>
					</div>
				</div>
			</li>
		);
	}
}

