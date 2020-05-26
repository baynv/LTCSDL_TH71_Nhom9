import React, { Component } from 'react';
import Post from '../components/Post';

export default class GraphicDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    title: 'TIÊU ĐỀ 1',
                    thumbnail: require('../images/pexels-photo.jpg'),
                    link: '/asd',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận' 
                },
                {
                    id: 2,
                    title: 'TIÊU ĐỀ 2',
                    thumbnail: require('../images/pexels-photo.jpg'),
                    link: '/asd',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận' 
                },
                {
                    id: 3,
                    title: 'TIÊU ĐỀ 3',
                    thumbnail: require('../images/pexels-photo.jpg'),
                    link: '/asd',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận' 
                },
                {
                    id: 4,
                    title: 'TIÊU ĐỀ 4',
                    thumbnail: require('../images/pexels-photo.jpg'),
                    link: '/asd',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận' 
                },
                {
                    id: 5,
                    title: 'TIÊU ĐỀ 5',
                    thumbnail: require('../images/pexels-photo.jpg'),
                    link: '/asd',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận' 
                },
            ]
        }
    }

    render() {

        /*var match = this.props.match;
        console.log(match);*/
        var posts = this.state.posts;
        let elmPosts = posts.map((post, index) => {
            return (
                <Post key={index} id={post.id} thumbnail={post.thumbnail} title={post.title} link={post.link} uploadTime={post.upload_time} comments={post.comments}/>
            );
        });

        return (
            <div className="col-sm-8">
                <h1 style={{ margin: '10px', marginBottom: '20px', color: 'black' }}>TÀI LIỆU THIẾT KẾ - ĐỒ HOẠ</h1>

                {elmPosts}

                <div style={{ textAlign: 'center' }}>
                    <ul className="pagination">
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
