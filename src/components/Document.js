import React, { Component } from 'react';

class Document extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	
	render() {
		return (
			<li>
				<div className="document">
					<a href="# ">
						<img alt="thumnail" />
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
export default Document;
