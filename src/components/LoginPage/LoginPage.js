import React, { Component} from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';


class LoginPage extends Component {
    state = {error:null}

    render(){
        //console.log("render@LoginPage.js")
        const { error } = this.state
        return(
            <div className="LoginPage">
                <Link className="Link" to="/">
                    <h1 className="app-name">Faith Share</h1>
                </Link>
                <img className="dove-img" src="https://i.imgur.com/RPwFA2V.png" alt="dove-img" />

                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={()=>{}}>
                    <div role="alert">
                        {error && <p className='red'>{error}</p>}
                    </div>    
                    <label htmlFor='login_user_name'>
                        Username:
                    </label>
                    <input type='text' name='user_name' id='login_user_name' required/><br/>
                    
                    <label htmlFor='login_password'>
                        Password:
                    </label>
                    <input type='text' name='password' id='login_password' required/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )

    }

}

export default LoginPage;