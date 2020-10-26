import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //Login logic
    const login = event => {
        event.preventDefault()
        if (checkForm()) {

        }
    }

    // Form validation function
    const checkForm = () => {
        if (!email || !password) {
            setError('You have to fill all fields.');
            return false;
        }
        return true;
    }


    return (
        <>
            <form>
                <h2>Log in</h2>
                {/* input div for email */}
                <div className="input_div">
                    <div className="i">
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="inputDiv">
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                </div>

                {/* input div for password */}
                <div className="input_div">
                    <div className="i">
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="inputDiv">
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                </div>
                <small className="textError">{error}</small>
                <input type="submit" className="btn__submit" value="Login" onClick={login} />
                <div className="signup__link">
                    Don't have any account? <span className="stateChange" onClick={props.stateChange}>Register here</span>
                </div>

                <div className="loginWithSocial">
                <div className="login__option facebook">
                    <div className="logo"><i class="fab fa-facebook-f"></i></div>
                    <div class="text">Sign in with facebook</div>
                </div>
                <div className="login__option google" >
                    <div className="logo"><svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308h-86.308c-34.255 44.488-52.823 98.707-52.823 155.785s18.568 111.297 52.823 155.785h86.308v-86.308c-12.142-20.347-19.131-44.11-19.131-69.477z" fill="#fbbd00" /><path d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216c-20.525 12.186-44.388 19.039-69.569 19.039z" fill="#0f9d58" /><path d="m139.131 325.477-86.308 86.308c6.782 8.808 14.167 17.243 22.158 25.235 48.352 48.351 112.639 74.98 181.019 74.98v-120c-49.624 0-93.117-26.72-116.869-66.523z" fill="#31aa52" /><path d="m512 256c0-15.575-1.41-31.179-4.192-46.377l-2.251-12.299h-249.557v120h121.452c-11.794 23.461-29.928 42.602-51.884 55.638l86.216 86.216c8.808-6.782 17.243-14.167 25.235-22.158 48.352-48.353 74.981-112.64 74.981-181.02z" fill="#3c79e6" /><path d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606c-48.352-48.352-112.639-74.981-181.02-74.981l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" fill="#cf2d48" /><path d="m256 120v-120c-68.38 0-132.667 26.629-181.02 74.98-7.991 7.991-15.376 16.426-22.158 25.235l86.308 86.308c23.753-39.803 67.246-66.523 116.87-66.523z" fill="#eb4132" /></g></svg></div>
                    <div class="text">Sign in with Google</div>
                </div>
            </div>
            </form>
        </>
    )
}

export default Signin
