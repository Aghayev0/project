import React from 'react'
import asusLogo from '../../../images/asus_logo_png.png'
const Register = () => {
    return (
        <>
            <main className="form-signin">
                <form>
                    <img className="mb-4" src={asusLogo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                       
                            <input type="password" className="form-control"  placeholder="Confirm Password" /> 
                            <label htmlFor="floatingPassword2">Confirm Password </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        </>
    );
};

export default Register;
