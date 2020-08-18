import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Exercise = (props) => {
  if (props.exercise.duration == 1) {
    return (
      <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description} </td>
        <td>{props.exercise.duration} minute</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
          <Link to={'/edit/' + props.exercise._id} className='btn btn-warning'>
            Edit
          </Link>{' '}
          <a
            href='#'
            className='btn btn-danger'
            onClick={() => {
              confirmAlert({
                title: 'Delete Confirmation',
                message: 'Are you sure you want to delete this log?',
                buttons: [
                  {
                    label: 'Yes, I am sure',
                    onClick: () => {
                      props.delExercise(props.exercise._id);
                      alert(
                        `${props.exercise.username}, ${props.exercise.description} was deleted successfully`
                      );
                    },
                  },
                  {
                    label: 'No, this is a mistake',
                  },
                ],
              });
            }}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description} </td>
        <td>{props.exercise.duration} minutes</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
          <Link to={'/edit/' + props.exercise._id} className='btn btn-warning'>
            Edit
          </Link>{' '}
          <a
            href='#'
            className='btn btn-danger'
            onClick={() => {
              confirmAlert({
                title: 'Delete Confirmation',
                message: 'Are you sure you want to delete this log?',
                buttons: [
                  {
                    label: 'Yes, I am sure',
                    onClick: () => {
                      props.delExercise(props.exercise._id);
                      alert(
                        `${props.exercise.username}, ${props.exercise.description} was deleted successfully`
                      );
                    },
                  },
                  {
                    label: 'No, this is a mistake',
                  },
                ],
              });
            }}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
};

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.delExercise = this.delExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/exercises/')
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((err) => console.log('Error: ' + err));
  }

  delExercise(id) {
    axios
      .delete('http://localhost:5000/exercises/' + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('Error: ' + err));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exercisesList() {
    return this.state.exercises.map((currexerc) => {
      return (
        <Exercise
          exercise={currexerc}
          delExercise={this.delExercise}
          key={currexerc._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Tracked Exercises</h3>
        <hr />
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exercisesList()}</tbody>
        </table>
      </div>
    );
  }
}
