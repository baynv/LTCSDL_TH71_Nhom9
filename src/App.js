import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Form from './components/Form';
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
					name: 'TÊN DOCUMENT',
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
					thumnail: '',
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

		const elmCategories = categories.map((item, index) =>
			<Category key={index} name={item.name} documents={documents}/>
		);

		return (
			<div className="App">

				<div className="container">
					<Header />
				</div>

				<div className="container-fluid">
					<NavBar />
				</div>

				<div className="container">

					<div className="row">
						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
							<Carousel />
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							<Form />
							<Advertisement />
						</div>
					</div>

					<div className="row">
						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
							{elmCategories}
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
