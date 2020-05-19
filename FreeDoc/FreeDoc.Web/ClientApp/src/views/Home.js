import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Category from '../components/Category';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    name: 'LẬP TRÌNH',
                    link: '/programming',
                },
                {
                    name: 'THIẾT KẾ - ĐỒ HỌA',
                    link: '/graphic-design',
                },
                {
                    name: 'TIẾNG ANH',
                    link: '/english'
                },
                {
                    name: 'PHẦN MỀM',
                    link: '/software',
                }
            ],
            items: [
                {
                    thumnail: '',
                    name: 'Tên document Tên document Tên document Tên document Tên document',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận'
                },
                {
                    thumnail: '',
                    name: 'TÊN DOCUMENT',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận'
                },
                {
                    thumnail: 'https://www.wikihow.com/images/2/2b/Convert-a-Word-Document-to-HTML-Step-8.jpg',
                    name: 'TÊN DOCUMENT',
                    upload_time: 'Thời gian',
                    comments: 'Bình luận'
                }
            ]
        };
    }


    render() {
        let categories = this.state.categories;
        let items = this.state.items;

        let elmCategory = categories.map((item, index) => {
            return (
                <Category key={index} name={item.name} link={item.link} items={items} />
            );
        });

        return (
            <div className="col-sm-8">
                <Carousel />
                {elmCategory}
            </div>
        );
    }
}
