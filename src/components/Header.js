import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {

	render() {
		return (
			<header>
				<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-9">
						<h1 href="# ">Freedoc<small>.net</small></h1>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-3 text-right">
						<button type="button" data-toggle="modal" data-target="#modal-login" className="btn btn-info" title="Đăng nhập/ Đăng ký">ĐĂNG NHẬP <span className="glyphicon glyphicon-log-in"></span></button>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
