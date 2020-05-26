import React, {Component} from 'react';
import '../styles/Footer.css';

export default class Footer extends Component {
	formatName(author) {
		return author.author1 + ' & ' + author.author2;
	}

  	render() {
  		const author = {
			author1: 'PVMT',
			author2: 'NVB'
		};
		return (
				<div className="footer-component text-center">
				
					<br/>
					<span className="social-link-footer">
						<a href="# " className="facebook"><i className="fa fa-facebook"></i></a>
						<a href="# " className="youtube"><i className="fa fa-youtube"></i></a>
						<a href="# " className="github"><i className="fa fa-github"></i></a>
					</span>
					<br/>
					<span className="text-white">Copyright &copy; 2020. Design by <b>{this.formatName(author)}</b>.</span>
				</div>
			);
		}
}