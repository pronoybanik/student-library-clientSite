import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {

    const { createNewUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault()
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        createNewUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.error(error);

            })
    }
    return (
        <div className=' flex justify-center items-center'>
            <div className=' max-w-2xl'>
                <h1 className='text-center text-3xl'>create a new  account</h1>
                <form onSubmit={handleSubmit}>

                    <div className='mt-6'>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered rounded-full" />
                        </div> */}
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

                            <button className='btn btn-outline mt-4 rounded-sm  btn-sm'>submit</button>
                        </div>

                    </div>
                </form>

            </div>


        </div>
    );
};

export default Register;