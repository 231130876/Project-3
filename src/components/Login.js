import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';  // Import Link

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Login</h1>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                
                <h2>Forgot Password?</h2>
                <p><Link to="/reset-password">Reset Password</Link></p>  {/* Gunakan Link untuk navigasi */}
                
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
