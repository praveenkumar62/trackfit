import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class ExerciseList extends Component {

    state = {
        list:[]
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/exercises/')
        .then(res => 
            this.setState({
                list: res.data
            })
        )
    }

    handleDelete = (id) => {
        Axios.delete('http://localhost:5000/exercises/'+id)
        .then(res => console.log(res.data))
        .catch(err => console.log('Error while deleting is '+err))

        // to delete in front end without page reload
        this.setState({
            list: this.state.list.filter(items => items._id !== id)
        })
    }

    render() {

        const ExerciseList = this.state.list.map(items => {
            return(
                <div className="well" key={items._id}>
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                            {items.username}
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                            <i className="fa fa-trash-o" onClick={() => this.handleDelete(items._id)} style={{color:'coral',fontSize:'20px'}}></i>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">    
                            <Link to={'/edit/'+items._id}><i className="fa fa-pencil" style={{color:'coral',fontSize:'20px'}}></i></Link>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="container-exerciselist">
                <div className="container">
                    {ExerciseList}
                </div>
            </div>
        )
    }
}

export default ExerciseList;