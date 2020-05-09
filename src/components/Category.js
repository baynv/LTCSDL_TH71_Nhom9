import React, { Component } from 'react';
import '../styles/Category.css';
import Document from './Document';

class Category extends Component {
    constructor(props) {
		super(props);

		this.state = {
			
		};
    }
    
    render() {
        let documents = this.props.documents;
        const elmDocument = documents.map((item, index) => {
            return(
                <Document 
                    key={index} 
                    thumnail={item.thumnail} 
                    name={item.name}
                    uploadTime={item.upload_time}
                    comments={item.comments}
                />
            );
        });

        return (
            <div className="category">

                <div className="title">
                    <h3>{this.props.name}</h3>
                </div>

                <ul className="documents">
                    {elmDocument}
                </ul>

            </div>
        );
    }
}
export default Category;
