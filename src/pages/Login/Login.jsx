import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const{signIn}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    console.log(location);

    const handleLogin=e=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget)
        const email =form.get('email')
        const password=form.get('password')
        console.log(email,password);

        //signIn
        signIn(email,password)
        .then(result=>{
            console.log(result);
            navigate(location?.state? location.state:'/')
        })
        .catch()
    }
    return (
        <div>
            <Navbar></Navbar>
            <h3>This is login</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Do not have an account <Link className="text-blue-600"  to='/register'>Register</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;