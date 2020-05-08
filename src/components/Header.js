import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (

			<div className="row">
				<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
					<h1>FREEDOC<small>.NET</small></h1>
				</div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<a href="# ">Register</a>
					<span>/</span>
					<a href="# ">Login</a>
				</div>
			</div>
		);
	}
}

export default Header;
