import React, { Component } from 'react';
import '../styles/Carousel.css';

class Carousel extends Component {

    render() {
        return (
            <div id="carousel-id" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carousel-id" data-slide-to="0" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="1" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="2" className="active"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item">
                        <img src={require('../images/reactjs.png')} alt="First slide" />
                    </div>
                    <div className="item">
                        <img src={require('../images/angularjs.jpg')} alt="Second slide" />
                    </div>
                    <div className="item active">
                        <img src={require('../images/vuejs.jpeg')} alt="Third slide" />
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>

            </div>
        );
    }
}

export default Carousel;
