import React, { Component } from 'react';

class Document extends Component {
	render() {
		return (
			<li>
				<div className="document">
					<a href="# ">
						<img alt="thumnail" />
					</a>
					<div className="file-name">
						TÊN DOCUMENT
                                    </div>
					<hr />
					<div className="info">
						<span>Thời gian / Bình luận</span>
					</div>
				</div>
			</li>
		);
	}
}
export default Document;
