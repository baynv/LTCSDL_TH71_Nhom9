import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import SearchForm from './components/SearchForm';
import Advertisement from './components/Advertisement';
import Category from './components/Category';
import PopularPosts from './components/PopularPosts';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {	
		super(props);

		this.state = {
			categories: [
				{
					name: 'LẬP TRÌNH'
				},
				{
					name: 'THIẾT KẾ - ĐỒ HOẠ'
				},
				{
					name: 'TIẾNG ANH'
				},
				{
					name: 'PHẦN MỀM'
				}
			],
			documents: [
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
		// ES6 foreach show all categories
		let categories = this.state.categories;
		let documents = this.state.documents;

		const elmCategory = categories.map((item, index) =>
			<Category key={index} name={item.name} documents={documents}/>
		);

		return (
			<div className="App">

				<div className="container">
					
					<Header />

					<NavBar />

					<div className="row">
						<div className="col-sm-8">
							<Carousel />
						</div>
						<div className="col-sm-4">
							<SearchForm />
							<Advertisement />
						</div>
					</div>

					<div className="row">
						<div className="col-sm-8">
							{elmCategory}
						</div>
						<div className="col-sm-4">
							<PopularPosts />
						</div>
					</div>

					<Footer />
				</div>

			</div>
		);
	}
}

export default App;
