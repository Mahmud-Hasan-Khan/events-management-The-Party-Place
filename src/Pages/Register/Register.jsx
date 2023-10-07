import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser } = useContext(UserContext);
    const [errorReg, setErrorReg] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl');
        const name = form.get('name');
        console.log(email, password, name, photoUrl);

        // password validation using regex
        if (!/^.{6,}$/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'Password must have 6 characters or more',
            });
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'Password must have a capital letter',
            });
            return;
        }
        else if (!/[!@#$%^&*()_+]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'Password must have a special character',
            });
            return;
        }


        //Register user with email and password
        createUser(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'Registration Successful! Login You Account Now.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate('/login')
            })

            .catch((error) => {
                const errorMessage = error.message;
                setErrorReg(errorMessage)

                Swal.fire({
                    icon: 'error',
                    text: errorReg
                })
            })
    }

    return (
        <div style={{
            backgroundImage: `url(https://i.ibb.co/jb9JDF8/Registration-Bg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        }}
        >
            <div className="hero my-2">
                <div className="px-24 py-4 max-w-[752px] shadow-2xl bg-transparent backdrop-blur-sm rounded-lg">
                    <h1 className="text-4xl font-semibold text-center text-white">Register your account</h1>
                    <div className="divider pt-1"></div>

                    <form onSubmit={handleRegister} className="space-y-2">
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Photo URL</span>
                            </label>
                            <input type="url" name="photoUrl" placeholder="Enter your Photo URL" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                            <label className="label">
                                <span className="text-left"><input type="checkbox" name="" id="" required /> <Link to='/'>Accept Term & Conditions</Link> </span>
                            </label>
                        </div>
                        <div className="form-control mt-6 max-w-[558px]">
                            <button className="bg-orange-600 font-medium text-white py-3 rounded-lg hover:bg-orange-700">Register</button>
                        </div>
                        <p className="font-semibold text-center">Already have an account ? <Link to="/login" className="text-white">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;