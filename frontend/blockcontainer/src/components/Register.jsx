import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../actions";
import Header from './Header'
import fav from '../fav.png';
import Footer from './Footer'
class Register extends Component {

    state = {
        username: "",
        password: "",
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
        <div>
        <Header/> 
        <div className="container">
        <div className="row">
        <div className="col-md-5 mx-auto mt-5 mb-5 loginbox">
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <img src={fav} alt=""/> <span className="overview">Register</span>
                    {this.props.errors.length > 0 && (
                        <ul>
                            {this.props.errors.map(error => (
                                <li className="errormessage" key={error.field}>{error.message}</li>
                            ))}
                        </ul>
                    )}
                    <p>
                        <input
                            type="text" id="username" className="width-100"
                            onChange={e => this.setState({username: e.target.value})} placeholder="Enter Username..."/>
                    </p>
                    <p>
                        <input
                            type="password" id="password" className="width-100"
                            onChange={e => this.setState({password: e.target.value})}  placeholder="Enter Password..."/>
                    </p>
                    <p>
                        <button className="blue-btn blue-btn-100" type="submit">Register</button>
                    </p>

                    <p>
                        You already have an account? <Link to="/login">Log in</Link>
                    </p>
                </fieldset>
            </form>
            </div>
        </div>
        </div>
          <Footer/>
        </div>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return {field, message: state.auth.errors[field]};
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        register: (username, password) => {
            return dispatch(auth.register(username, password));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

