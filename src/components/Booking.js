import React, { Component } from 'react';


class Booking extends Component {
    state = { arrKursi: [{cbChecked: true, cbDisabled: true}, 
            {cbChecked: false, cbDisabled: false}] }

        onCBClicked = (kursiKe) => {
        if(!this.state.arrKursi[kursiKe].cbDisabled) {
            this.state.arrKursi[kursiKe].cbChecked = !this.state.arrKursi[kursiKe].cbChecked;
            this.setState({ });
        }
    }
    render() {
        return (
            <div>
                <input type="checkbox" 
                    checked={this.state.arrKursi[0].cbChecked} 
                    disabled={this.state.arrKursi[0].cbDisabled} 
                    onClick={() => this.onCBClicked(0)}
                />
                <input type="checkbox" 
                    checked={this.state.arrKursi[1].cbChecked} 
                    disabled={this.state.arrKursi[1].cbDisabled} 
                    onClick={() => this.onCBClicked(1)}
                />
            </div>
        );
    }
}


export default Booking;