import React from 'react';

const Login = () => {
    return (
        <div className=' flex justify-center items-center'>
            <div className=' max-w-2xl'>
                <h1 className='text-center text-3xl'>Login to your account</h1>
                <div className='mt-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type="password" placeholder="*******" className="input input-bordered  rounded-full" />
                    </div>

                    <div className='flex justify-center'>

                        <button className='btn btn-outline mt-4 rounded-sm btn-sm'>submit</button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;