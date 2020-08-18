import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      age: 0,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age: Number(e.target.value),
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      age: Number(this.state.age),
    };
    console.log(user);

    try {
      axios
        .post('http://localhost:5000/users/add', user)
        .then((res) => console.log(res.data));
    } catch (err) {
      console.log('Error: ' + err);
    }

    alert('User created!');

    this.setState({
      username: '',
      age: 0,
    });
  }

  render() {
    return (
      <div>
        <h3>Create a New User</h3>
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              required
              className='form-control'
              onChange={this.onChangeUsername}
              placeholder='Username'
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              required
              className='form-control'
              onChange={this.onChangeAge}
              placeholder='Age'
              min='0'
              max='120'
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Create' className='btn btn-primary' />
          </div>
        </form>
      </div>
    );
  }
}
