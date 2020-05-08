import React, { Component } from 'react';
import '../styles/Category.css';
import Document from './Document';

class Category extends Component {
    render() {
        return (
            <div className="category">

                <div className="title">
                    <h3>LẬP TRÌNH</h3>
                </div>

                <ul className="documents">
                    <Document />
                    <li>
                        <div className="document">
                            <a href="# ">
                                <img alt="thumnail" />
                            </a>
                            <div className="file-name">
                                TÊN DOCUMENT
                            </div>
                            <hr />
                            <div className="info">
                                <span>Thời gian / Bình luận</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="document">
                            <a href="# ">
                                <img alt="thumnail" />
                            </a>
                            <div className="file-name">
                                TÊN DOCUMENT
                                    </div>
                            <hr />
                            <div className="info">
                                <span>Thời gian / Bình luận</span>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        );
    }
}
export default Category;
