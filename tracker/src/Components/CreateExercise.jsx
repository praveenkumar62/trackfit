import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import Axios from 'axios'; 
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {
    state = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: [] 
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/users')
        .then(res => {
            if(res.data.length > 0) {
                this.setState({
                    users: res.data.map(onlyUser => onlyUser.username)
                })
            }
        })
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
        const exercises = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        Axios.post('http://localhost:5000/exercises/add', exercises)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        window.location = '/';
    }

    render() {
        return(
            <div className="container-createexercise">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <select name="username" id="username" className="form-control" onChange={this.handleChange}>
                                {
                                    this.state.users.map(user => {
                                        return(
                                            <option key={user} value={user}>{user}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" className="form-control" name="description" id="description" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration:</label>
                            <input type="number" className="form-control" name="duration" id="duration" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date" style={{display:'block'}}>Date:</label>
                            <DatePicker selected={this.state.date} onChange={this.handleDate} className="form-control" name="date" id="date" />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateExercise;