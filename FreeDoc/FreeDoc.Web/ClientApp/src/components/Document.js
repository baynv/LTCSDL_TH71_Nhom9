import React, { Component } from 'react';

export default class Document extends Component {
    render() {
        return (
            <div className="col-sm-8">
                <h1>{this.props.title}</h1>
                <p>Thời gian{this.props.uploadTime} / Bình luận{this.props.comments}</p>
                <img src={require('../images/reactjs.png')} alt="poster" style={{width: '100%'}}/>
                <div className="content">
                    Nội dung bài viết
                </div>
                <a href="# ">Link download</a>
                <div className="tags">
                    <h4>Thẻ bài viết:</h4>
                    <span className="label"><a href="# ">Tag 1</a></span>
                    <span className="label"><a href="# ">Tag 2</a></span>
                    <span className="label"><a href="# ">Tag 3</a></span>
                    <span className="label"><a href="# ">Tag 4</a></span>
                    <span className="label"><a href="# ">Tag 5</a></span>
                </div>
            </div>
        )
    }
}
