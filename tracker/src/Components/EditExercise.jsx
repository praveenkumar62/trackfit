import React, {Component} from 'react';
import Axios from 'axios';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class EditExercise extends Component {

    state = { 
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        user: []
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                username: res.data.username,
                description: res.data.description,
                duration: res.data.duration,
                date: new Date(res.data.date)
            })
        })
        .catch(err => console.log('Error is '+err))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDate = (date) => {
        this.setState({
            date: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise)
        Axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
        .then(res => console.log(res.data))
        .catch(err => console.log('Error in sending data is '+err))
    }

    render() {
        return(
            <div className="container-editexercise">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" onChange={this.handleChange} value={this.state.username} disabled name="username" id="username" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="description" id="description" value={this.state.description} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration:</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="duration" id="duration" value={this.state.duration} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <DatePicker onChange={this.handleDate} selected={this.state.date} name="date" id="date" className="form-control" />
                        </div>
                        <button className="btn btn-success">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditExercise;