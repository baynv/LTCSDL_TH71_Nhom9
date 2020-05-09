import React, { Component } from 'react';
import '../styles/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="navigation">
                    <nav>
                        <ul className="navigation">
                            <li><a href="# "><span className="glyphicon glyphicon-home"></span>&nbsp; TRANG CHỦ</a></li>
                            <li><a href="# ">LẬP TRÌNH</a>
                                <ul className="detailmenu">
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
                            <li><a href="# ">THIẾT KẾ - ĐỒ HOẠ</a>
                                <ul className="detailmenu">
                                    <li><a href="# ">AFTER EFFECT</a></li>
                                    <li><a href="# ">ILLUSTRATOR</a></li>
                                    <li><a href="# ">PHOTOSHOP</a></li>
                                    <li><a href="# ">PREMIERE PRO</a></li>
                                </ul>
                            </li>
                            <li><a href="# ">TIẾNG ANH</a></li>
                            <li><a href="# ">PHẦN MỀM</a>
                                <ul className="detailmenu">
                                    <li><a href="# ">LẬP TRÌNH</a></li>
                                    <li><a href="# ">ĐỒ HOẠ</a></li>
                                </ul>
                            </li>
                            <li><a href="# ">LIÊN HỆ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;
