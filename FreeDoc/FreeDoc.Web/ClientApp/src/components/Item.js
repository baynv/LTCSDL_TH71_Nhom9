import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Item.css';

export default class Item extends Component {
	
	render() {
		return (
			<li>
				<div className="item">
					<Link to={this.props.link}>
						<img src={this.props.thumbnail} alt="thumnail"/>
					</Link>
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

