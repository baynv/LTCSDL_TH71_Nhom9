import React, {Component} from 'react';

class Document extends Component {
	render() {
		return (
			<div className="panel panel-info document {this.props.name}">
				<div className="panel-heading">
					<h3 className="panel-title">{this.props.name}</h3>
				</div>
				<div className="panel-body text-justify">
					<div><em>{this.props.upl_time}</em></div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum animi excepturi, error dignissimos quibusdam eligendi optio voluptate necessitatibus. Quam corrupti, commodi sint, repellat nesciunt dicta. Fugit nemo doloribus natus! Ipsam.
				</div>
			</div>
  		);
	}
}
export default Document;
