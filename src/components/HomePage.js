import React, { Component } from 'react';
//import axios from 'axios';
//import { API_URL_1 } from '../supports/api-url/apiurl';
import CarouselBro from './CarouselBro';
import image1 from '../images/film1.jpg';
import image2 from '../images/film2.jpg';
import image3 from '../images/film3.jpg';


class HomePage extends Component {

    onExploreClick = () => { }

    onBuyClick= () => {}

    render() {
        return (
            <div style={{ marginTop: "80px" }}>
                <CarouselBro 
                    legend1={"The Nun"} 
                    image1={image1} 
                    legend2={"Catatan Anak Petualang"} 
                    image2={image2} 
                    legend3={"Reprisal"} 
                    image3={image3}
                    munculText={false}
                    textnya={"Selamat Pagi Indonesia"}
                />
                
                <div style={{marginTop:"20px"}}>
                    <input type="button" className="btn btn-danger" value="Explore" onClick={this.onExploeeClick}></input>&nbsp;
                    <input type="button" className="btn btn-danger" value="Buy Tiket" onClick={this.onBuyClick}></input>
                </div>
            </div>
        );
    }
}

export default HomePage;