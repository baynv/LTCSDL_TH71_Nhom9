import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="navigation">
                        <nav>
                            <ul className="navigation">
                                <li><a href="# "><span className="fa fa-home"></span> TRANG CHỦ</a></li>
                                <li><a href="# ">LẬP TRÌNH</a>
                                    <ul className="detailmenu">
                                        <li><a href="# ">ANDROID</a></li>
                                        <li><a href="# ">ANGULAR</a></li>
                                        <li><a href="# ">ASP.NET</a></li>
                                        <li><a href="# ">C / C++ / C#</a></li>
                                    </ul>
                                </li>
                                <li><a href="# ">THIẾT KẾ - ĐỒ HOẠ</a>
                                    <ul className="detailmenu">
                                        <li><a href="# ">DSLR CANON</a></li>
                                        <li><a href="# ">DSLR NIKON</a></li>
                                        <li><a href="# ">DSLR KHÁC</a></li>
                                    </ul>
                                </li>
                                <li><a href="# ">TIẾNG ANH</a></li>
                                <li><a href="# ">PHẦN MỀM</a>
                                    <ul className="detailmenu">
                                        <li><a href="# ">ỐNG KÍNH CANON</a></li>
                                        <li><a href="# ">ỐNG KÍNH NIKON</a></li>
                                        <li><a href="# ">ỐNG KÍNH SONY</a></li>
                                        <li><a href="# ">ỐNG KÍNH FUJI</a></li>
                                        <li><a href="# ">ỐNG KÍNH SIGMA, TAMRON, TOKINA</a></li>
                                    </ul>
                                </li>
                                <li><a href="# ">LIÊN HỆ</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
