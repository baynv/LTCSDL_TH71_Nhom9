import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {

	render() {
		return (
			<header>
				<div className="row">
					<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 orangered">
						<h1>FREEDOC<small>.NET</small></h1>
					</div>
					<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 orangered">
						<button type="button" className="btn btn-default btn-white">Đăng ký</button>
						<button type="button" className="btn btn-default btn-black">Đăng nhập</button>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
