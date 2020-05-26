import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Category from '../components/Category';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : [
                {
                    name: 'LẬP TRÌNH',
                    link: '/programming',
                    items: [
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'Tên document 1',
                            link        : '/asd',
                            upload_time : 'Thời gian 1',
                            comments    : 'Bình luận 1'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 2',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 3',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        }
                    ]
                },
                {
                    name: 'THIẾT KẾ - ĐỒ HỌA',
                    link: '/graphic-design',
                    items: [
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'Tên document 4',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 5',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 6',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        }
                    ]
                },
                {
                    name: 'TIẾNG ANH',
                    link: '/english',
                    items: [
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'Tên document 7',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 8',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 9',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        }
                    ]
                },
                {
                    name: 'PHẦN MỀM',
                    link: '/software',
                    items: [
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'Tên document 10',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 11',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        },
                        {
                            thumbnail   : require('../images/pexels-photo.jpg'),
                            name        : 'TÊN DOCUMENT 12',
                            link        : '/asd',
                            upload_time : 'Thời gian',
                            comments    : 'Bình luận'
                        }
                    ]
                },
            ]
        };
    }
    

    render() {
        let categories = this.state.categories;
        let elmCategories = categories.map((item, index) => {
            return (
                <Category key={index} name={item.name} link={item.link} items={item.items} />
            );
        });

        return (
            <div className="col-sm-8">
                <Carousel />
                {elmCategories}
            </div>
        );
    }
}
