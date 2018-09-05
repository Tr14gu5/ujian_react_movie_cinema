import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class CarouselBro extends Component {
    Home = () => {
        if(this.props.munculText) {
            return (<h1>{this.props.textnya}</h1>);
        }
    }
    render() {
        return (
            <div>
                <Carousel showThumbs={false} showIndicators={false}  className="container kucing">
                    <div className="merdeka">
                        <img src={this.props.image1} alt=" "/>
                        <p className="legend">{this.props.legend1}</p>
                    </div>
                    <div className="merdeka">
                        <img src={this.props.image2} alt=" " />
                        <p className="legend">{this.props.legend2}</p>
                    </div>
                    <div className="merdeka">
                        <img src={this.props.image3} alt=" " />
                        <p className="legend">{this.props.legend3}</p>
                    </div>
                </Carousel>
                {this.Home()}
            </div>
        );
    }
}

export default CarouselBro;