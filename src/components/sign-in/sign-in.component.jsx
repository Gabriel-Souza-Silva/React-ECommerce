import React, { Component } from 'react';
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component' 
import CustomButton from '../custom-button/custom-button.component'


import {signInWithGoogle} from '../../firebase/firebase.utils'

export default class SignIn extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }    

    handleSubmit = (e) =>{
        e.preventDefault()

        this.setState({email: '',password: ''})
    }

    handleChange = (e) =>{
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email'
                        value={this.state.email} 
                        label="Email"
                        required
                        handleChange={this.handleChange}/>

                    <FormInput 
                        type="password" 
                        name='password' 
                        value={this.state.password} 
                        required
                        label="Password"
                        handleChange={this.handleChange}/>

                    <CustomButton type="submit"> Sign In {/* children do botao é usado nas props */} </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign In With Google</CustomButton>
                </form>
            </div>
        );
    }
}
