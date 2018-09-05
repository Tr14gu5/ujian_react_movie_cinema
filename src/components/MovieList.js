import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import MovieDetail from './MovieDetail';
import Booking from './Booking';
import { API_URL_1 } from '../supports/api-url/apiurl';

class MovieList extends Component {
    state = { movies: [] }

    componentWillMount() {
        axios.get(API_URL_1 + '/movies')
        .then(movie => {
            this.setState({ movies: movie.data });
        });
    }

    renderMovieList = () => {
        return this.state.movies.map(movie => 
            <MovieDetail key={movie.id} movie={movie} />
        );
    }

    render() {
        console.log(this.state.movies);
        if (this.props.auth.username !== "") {
            return (
                <section className="bg-light" id="portfolio">
                    <div className="container">
                        <h1>Daftar Film di Studio 1</h1>
                        <div className="row">
                            {this.renderMovieList()}
                        </div>
                    </div> 
                    <div style={{marginTop:"20px"}}>
                        <input type="button" className="btn btn-danger" value="Explore" onClick={this.onExploeeClick}></input>&nbsp;
                        <input type="button" className="btn btn-danger" value="Buy Tiket" onClick={this.onBuyClick}></input>
                    </div>

                    <div>
                        &nbsp;<h3>Tempat Duduk Coy</h3> &nbsp;
                        <Booking />
                    </div>
                    <div>
                        &nbsp;<h3>Harganya coy: IDR </h3> &nbsp;
                        <input type="button" className="btn btn-danger" value="Bayar cepat" onClick={this.onBuyClick}></input>
                    </div>
                </section>
            );
        }
        return <Redirect to ="./Login" />
    }
}

                

const mapStateToProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStateToProps) (MovieList);