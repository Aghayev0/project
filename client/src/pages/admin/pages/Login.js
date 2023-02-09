import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login, checkToken } from '../auth/auth'
import asusLogo from '../../../images/asus_logo_png.png'

const Year = new Date().getFullYear()

const Login = () => {

const token = checkToken();

const navigate = useNavigate()

const initialState = { email: "test@asus.com", password: "asus12345" };
const [userData, setUserData] = useState(initialState);
const { email, password } = userData;

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });   
}

const handleSubmit = () => {
    if (userData.email === "test@asus.com" && userData.password === "asus12345") {
        login();
    } else {
        alert("Wrong Credentials");
    }
};

useEffect(() => {
    if (token) navigate("/panel/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);




  return (
    <>
<main className="form-signin">
            <form onSubmit={handleSubmit}>
            <div className="text-center">
                        <img className="mb-2" src={asusLogo} alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 fw-normal">Welcome to Back</h1>

                        <h4 className=" mb-3 ">Please sign in</h4>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" onChange={handleInputChange} name="email" value={email} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" onChange={handleInputChange} name="password" value={password} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; {Year} ASUS </p>
                </form>
            </main>

            <style jsx="true">
                {`
                    .form-signin {
                        width: 100%;
                        max-width: 330px;
                        padding: 15px;
                        margin: auto;
                    }

                    .form-signin .checkbox {
                        font-weight: 400;
                    }

                    .form-signin .form-floating:focus-within {
                        z-index: 2;
                    }

                    .form-signin input[type="email"] {
                        margin-bottom: -1px;
                        border-bottom-right-radius: 0;
                        border-bottom-left-radius: 0;
                    }

                    .form-signin input[type="password"] {
                        margin-bottom: 10px;
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    }
                `}
            </style>

    </>
  )
}

export default Login