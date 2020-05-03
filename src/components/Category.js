import React, { Component } from 'react';
import Document from './Document';

class Category extends Component {
	render() {

		return (
			<div className="container">
				<div className="category-component row">
					<h3 className="separator">{this.props.name}</h3>
					<div className="col-xs-3">
						<Document name="Tài liệu 1" upl_time="20 - 04 - 2020 11:00" active={true} />
					</div>
					<div className="col-xs-3">
						<Document name="Tài liệu 2" upl_time="18 - 04 - 2020 08:00" active={false} />
					</div>
				</div>
			</div>
		);
	}
}

export default Category;
