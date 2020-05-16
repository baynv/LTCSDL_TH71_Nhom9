import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import '../styles/NavBar.css';

const navbar = [
    {
        name  : 'TRANG CHỦ',
        to    : '/',
        exact : true,
    },
    {
        name  : 'LẬP TRÌNH',
        to    : '/programming',
        exact : false,
    },
    {
        name  : 'THIẾT KẾ - ĐỒ HOẠ',
        to    : '/graphicDesgin',
        exact : false,
    },
    {
        name  : 'TIẾNG ANH',
        to    : '/english',
        exact : false,
    },
    {
        name  : 'PHẦN MỀM',
        to    : '/software',
        exact : false,
    },
    {
        name  : 'LIÊN HỆ',
        to    : '/contact',
        exact : false,
    },
]

export default class NavBar extends Component {
    
    render() {
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
                            <li>
                            <NavLink exact to="/" activeClassName="active"><span className="glyphicon glyphicon-home"></span> TRANG CHỦ</NavLink>
                            </li>

                            <li className="dropdown">
                                <NavLink exact to="/programming" activeClassName="active" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">LẬP TRÌNH <span className="caret"></span></NavLink>
                                <ul className="dropdown-menu">
                                    <li><a href="# ">ANDROID</a></li>
                                    <li><a href="# ">ANGULAR</a></li>
                                    <li><a href="# ">ASP.NET</a></li>
                                    <li><a href="# ">C / C++ / C#</a></li>
                                    <li><a href="# ">NODEJS</a></li>
                                    <li><a href="# ">JAVA</a></li>
                                    <li><a href="# ">JAVASCRIPT</a></li>
                                    <li><a href="# ">PHP</a></li>
                                    <li><a href="# ">PYTHON</a></li>
                                    <li><a href="# ">REACTJS</a></li>
                                    <li><a href="# ">VUEJS</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <NavLink exact to="/design" activeClassName="active" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">THIẾT KẾ - ĐỒ HỌA <span className="caret"></span></NavLink>
                                <ul className="dropdown-menu">
                                    <li><a href="# ">AFTER EFFECT</a></li>
                                    <li><a href="# ">ILLUSTRATOR</a></li>
                                    <li><a href="# ">PHOTOSHOP</a></li>
                                    <li><a href="# ">PREMIERE PRO</a></li>
                                </ul>
                            </li>

                            <li><NavLink exact to="/english"  activeClassName="active">TIẾNG ANH</NavLink></li>

                            <li className="dropdown">
                                <NavLink exact to="/software" activeClassName="active" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PHẦN MỀM <span className="caret"></span></NavLink>
                                <ul className="dropdown-menu">
                                    <li><a href="# ">LẬP TRÌNH</a></li>
                                    <li><a href="# ">ĐỒ HỌA</a></li>
                                </ul>
                            </li>

                            <li><NavLink exact to="/contact" activeClassName="active">LIÊN HỆ</NavLink></li>

                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
