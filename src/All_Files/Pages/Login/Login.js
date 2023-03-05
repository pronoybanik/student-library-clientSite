import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // from.reset('');
                toast.success('login success');

            })
            .catch(error => {
                console.error(error.message);
            })

    }
    return (
        <div className=' flex justify-center items-center'>
            <div className=' max-w-2xl'>
                <h1 className='text-center text-3xl'>Login to your account</h1>
                <form onSubmit={handleLogin}>
                    <div className='mt-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered rounded-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input name='password' type="password" placeholder="*******" className="input input-bordered  rounded-full" />
                        </div>

                        <div className='flex justify-center'>

                            <button className='btn btn-outline mt-4 rounded-sm btn-sm'>submit</button>
                        </div>

                    </div>

                </form>
            </div>


        </div>
    );
};

export default Login;