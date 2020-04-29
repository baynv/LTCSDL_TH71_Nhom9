import React, {Component} from 'react';
import Header from './components/Header';
import Category from './components/Category';
import Footer from './components/Footer';

class App extends Component {
	render() {
		const listCategories = [
  		{
  			id: 1,
  			name: "Lập trình"
  		},
  		{
  			id: 2,
  			name: "Ngoại ngữ"
  		},
  		{
  			id: 3,
  			name: "Thiết kế - Đồ Họa"
  		},
  		{
  			id: 4,
  			name: "Kỹ năng sống"
  		},
  		{
  			id: 5,
  			name: "Khác"
  		}
  	];
  	// ES6 foreach show all categories
  	const elmCategories = listCategories.map((item, index) => 
  		<Category key={index} name={item.name}/>
  	);
	return (
		<div className="App">
			<Header/>
			{elmCategories}
			<Footer/>
		</div>
  );
}
}

export default App;
