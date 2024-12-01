import React from 'react';
import "./css/LoginSignup.css";

function LoginSignup() {
    return (
        <section className="LoginSignup">
            <div className="LoginSignup-container">
                <h1>Sign Up</h1>
                <div className="LoginSignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button>Continue</button>
                </div>
                <p className="LoginSignup-login">Already have an account? <span>Login here</span></p>
                <div className="LoginSignup-agree">
                    <input type="checkbox" name="" id="" />
                    <label>By continuing, I agree to use the terms of use & privacy policy.</label>
                </div>
            </div>
        </section>
    )
}

export default LoginSignup;
