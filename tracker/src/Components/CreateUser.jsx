import React, {Component} from 'react';
import Axios from 'axios';

class CreateUser extends Component {

    state = {
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const users = {
            username: this.state.username
        }
        Axios.post('http://localhost:5000/users/add', users)
        .then(res => console.log(res.data))
        this.setState({
            username: ''
        })     
    }
    render() {
        return(
            <div className="container-createuser">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" name="username" id="username" onChange={this.handleChange} value={this.state.username} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateUser;