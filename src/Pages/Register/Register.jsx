import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from 'sweetalert2';

const Register = () => {
    // const { createUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl');
        const name = form.get('name');
        console.log(email, password, name, photoUrl);

        // create user
        // createUser(email, password)
        //     .then((userCredential) => {
        //         const loggedUser = userCredential.user;
        //         console.log(loggedUser);
        //         Swal.fire({
        //             title: 'Registration Successful! Login You Account Now.',
        //             showClass: {
        //                 popup: 'animate__animated animate__fadeInDown'
        //             },
        //             hideClass: {
        //                 popup: 'animate__animated animate__fadeOutUp'
        //             }
        //         })
        //         navigate('/login')
        //     })

        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         console.log(errorCode, errorMessage);

        //         Swal.fire({
        //             icon: 'error',
        //             text: error.message
        //         })
        //     })

    }
    return (
        <div>
            <div className="hero my-2">
                <div className="px-24 py-4 max-w-[752px] shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-semibold text-center">Register your account</h1>
                    <div className="divider pt-1"></div>

                    <form onSubmit={handleRegister} className="space-y-2">
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold">Photo URL</span>
                            </label>
                            <input type="url" name="photoUrl" placeholder="Enter your Photo URL" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                            <label className="label">
                                <span className="text-left"><input type="checkbox" name="" id="" required /> <Link to='/'>Accept Term & Conditions</Link> </span>
                            </label>
                        </div>
                        <div className="form-control mt-6 max-w-[558px]">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="font-semibold text-center">Already have an account ? <Link to="/login" className="text-red-500">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;