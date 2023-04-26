import React, { Component } from 'react'
import './mainScreen.css';
import Box from '../box_show_detail/Box';

export default class MainScreen extends Component {
  render() {
    return (
      <div className='mainScreen'>
        <h1 className='indexFont titleOrText'>MOVIE SEAT SELECTION</h1>
        <Box/>
        <p className='indexFont titleOrText'>© 2023 Movie Seat Selection . All Rights Reserved | Clone by Minh Duc</p>
        <div className="layer"></div>
        </div>
    )
  }
}
