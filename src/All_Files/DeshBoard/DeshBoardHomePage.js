import React, { useEffect, useState } from 'react';

const DeshBoardHomePage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div className='grid grid-cols-2 lg:grid-cols-2'>
           
            {
                data?.map(da => <div >
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={da?.imgData} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{da?.userName}</h2>
                           
                            <div className="card-actions">
                                <a className="btn btn-primary" href={da?.imgData} download rel='noopener noreferrer' target='_blank'> DownLoad</a>
                               
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default DeshBoardHomePage;