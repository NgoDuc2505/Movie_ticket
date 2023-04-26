import React, { Component } from 'react'
import ChooseSeat from '../choose_seat/ChooseSeat'
import './box.css'
import Form from '../form_user/Form'

export default class Box extends Component {
  render() {
    return (
      <div className='boxDetail row'>
        <div className="col-7">
        <ChooseSeat/>
        </div>
        <div className="col-5">
        <Form/>
        </div>
      </div>
    )
  }
}
