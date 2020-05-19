import React, { Component } from 'react';

export default class English extends Component {
    render() {
        return (
            <div className="col-sm-8">
                <h1 style={{margin: '10px', color: 'black' }}>TÀI LIỆU TIẾNG ANH</h1>

                <div className="media">
                    <a className="media-left" href="# ">
                        <img className="media-object" src={require('../images/pexels-photo.jpg')} alt="thumnail" />
                    </a>
                    <div className="media-body">
                        <a href="# "><h3 className="media-heading">Media heading</h3></a>
                        <p>Upload time / Comments</p>
                    </div>
                </div>

                <hr />

                <div className="media">
                    <a className="media-left" href="# ">
                        <img className="media-object" src={require('../images/pexels-photo.jpg')} alt="thumnail" />
                    </a>
                    <div className="media-body">
                        <a href="# "><h3 className="media-heading">Media heading</h3></a>
                        <p>Upload time / Comments</p>
                    </div>
                </div>

                <hr />

                <div className="media">
                    <a className="media-left" href="# ">
                        <img className="media-object" src={require('../images/pexels-photo.jpg')} alt="thumnail" />
                    </a>
                    <div className="media-body">
                        <a href="# "><h3 className="media-heading">Media heading</h3></a>
                        <p>Upload time / Comments</p>
                    </div>
                </div>

                <hr />

                <div className="media">
                    <a className="media-left" href="# ">
                        <img className="media-object" src={require('../images/pexels-photo.jpg')} alt="thumnail" />
                    </a>
                    <div className="media-body">
                        <a href="# "><h3 className="media-heading">Media heading</h3></a>
                        <p>Upload time / Comments</p>
                    </div>
                </div>

                <hr />

                <div className="media">
                    <a className="media-left" href="# ">
                        <img className="media-object" src={require('../images/pexels-photo.jpg')} alt="thumnail" />
                    </a>
                    <div className="media-body">
                        <a href="# "><h3 className="media-heading">Media heading</h3></a>
                        <p>Upload time / Comments</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <ul class="pagination">
                        <li><a href="# ">&laquo;</a></li>
                        <li className="active"><a href="# ">1</a></li>
                        <li><a href="# ">2</a></li>
                        <li><a href="# ">3</a></li>
                        <li><a href="# ">4</a></li>
                        <li><a href="# ">5</a></li>
                        <li><a href="# ">&raquo;</a></li>
                    </ul>
                </div>

            </div>
        )
    }
}
