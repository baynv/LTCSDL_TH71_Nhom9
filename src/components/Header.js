import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h1>FREEDOC<small>.NET</small></h1>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<a href="# ">Register</a>
						<span>/</span>
						<a href="# ">Login</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
