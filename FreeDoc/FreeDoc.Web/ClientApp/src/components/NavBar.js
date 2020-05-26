import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

import '../styles/NavBar.css';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                );
            }}
        />
    );
}

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: [
                {
                    name: 'TRANG CHỦ',
                    to: '/',
                    exact: true,
                },
                {
                    name: 'LẬP TRÌNH',
                    to: '/programming',
                    exact: false,
                },
                {
                    name: 'THIẾT KẾ - ĐỒ HOẠ',
                    to: '/graphic-design',
                    exact: false,
                },
                {
                    name: 'TIẾNG ANH',
                    to: '/english',
                    exact: false,
                },
                {
                    name: 'PHẦN MỀM',
                    to: '/software',
                    exact: false,
                },
                {
                    name: 'LIÊN HỆ',
                    to: '/contact',
                    exact: false,
                },
            ]
        }
    };

    render() {
        let elmNavbar = this.state.navbar.map((item, index) => {
            return (
                <MenuLink key={index} label={item.name} to={item.to} activeOnlyWhenExact={item.exact} />
            );
        });

        return (
            <nav className="navbar">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="nav navbar-nav">

                            {elmNavbar}
                            {/* <li>
                                <Link exact to="/"><span className="glyphicon glyphicon-home"></span> TRANG CHỦ</Link>
                            </li>

                            <li className="dropdown">
                                <Link exact to="/programming" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">LẬP TRÌNH <span className="caret"></span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/programming/android">ANDROID</Link></li>
                                    <li><Link to="/programming/angular">ANGULAR</Link></li>
                                    <li><Link to="/programming/asp-docnet">ASP.NET</Link></li>
                                    <li><Link to="/programming/c-cplus-csharp">C / C++ / C#</Link></li>
                                    <li><Link to="/programming/nodejs">NODEJS</Link></li>
                                    <li><Link to="/programming/java">JAVA</Link></li>
                                    <li><Link to="/programming/javascript">JAVASCRIPT</Link></li>
                                    <li><Link to="/programming/php">PHP</Link></li>
                                    <li><Link to="/programming/python">PYTHON</Link></li>
                                    <li><Link to="/programming/reactjs">REACTJS</Link></li>
                                    <li><Link to="/programming/vuejs">VUEJS</Link></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <Link exact to="/design" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">THIẾT KẾ - ĐỒ HỌA <span className="caret"></span></Link>
                                <ul className="dropdown-menu">
                                    <li><a href="# ">AFTER EFFECT</a></li>
                                    <li><a href="# ">ILLUSTRATOR</a></li>
                                    <li><a href="# ">PHOTOSHOP</a></li>
                                    <li><a href="# ">PREMIERE PRO</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <Link exact to="/english" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">TIẾNG ANH<span className="caret"></span></Link>
                                <ul className="dropdown-menu">
                                    <li><a href="# ">GIAO TIẾP</a></li>
                                    <li><a href="# ">CHUYÊN NGÀNH IT</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <Link exact to="/software" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PHẦN MỀM <span className="caret"></span></Link>
                                <ul className="dropdown-menu">
                                    <li><a href="# ">LẬP TRÌNH</a></li>
                                    <li><a href="# ">ĐỒ HỌA</a></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/contact">LIÊN HỆ</Link>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
