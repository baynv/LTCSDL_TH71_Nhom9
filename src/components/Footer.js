import React, {Component} from 'react';

class Footer extends Component {
	formatName(author) {
		return author.author1 + ', ' + author.author2 + ', ' + author.author3;
	}

  	render() {
  		const author = {
			author1: 'Author 1',
			author2: 'Author 2',
			author3: 'Author 3'
		};
		return (
				<div className="footer-component text-center">
					<span className="footer-link">
						<a href="# ">Điều khoản</a>
						<a href="# ">Điều kiện</a>
					</span>
					<br/>
					<span className="social-link-footer">
						<a href="# "><i className="fa fa-facebook"></i></a>
						<a href="# "><i className="fa fa-youtube"></i></a>
						<a href="# "><i className="fa fa-github"></i></a>
					</span>
					<br/>
					<span>Copyright &copy; 2020. Design by <b>{this.formatName(author)}</b>.</span>
				</div>
			);
		}
}
export default Footer;