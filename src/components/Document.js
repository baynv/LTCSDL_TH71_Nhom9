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
						<div className="thumnail" style={{"width" : "100%", "height" : "150px", "background" : "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg" + ")", "backgroundSize" : "cover"}}></div>
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
