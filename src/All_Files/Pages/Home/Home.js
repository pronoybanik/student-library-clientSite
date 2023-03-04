import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const imageData = data.image[0]
        const formData = new FormData()
        formData.append('image', imageData)

        const url = "https://api.imgbb.com/1/upload?expiration=600&key=5550f345acb359e7e2490bc35fc785af"
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)

                    const postData = {
                        post: data.post,
                        imgData: imgData.data.url
                    }
                    console.log(postData)
                }


            })

    }
    return (

        <div>
            <h1>pronoy </h1>
            <h1 className='uppercase text-3xl font-bold my-10'>You can upload data below</h1>


            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  {...register("name", {
                    required: 'text is required',

                })} className="input input-bordered w-full max-w-xs" />
                <br />

                <input type="file"  {...register("image", {
                    required: 'photo is required',
                })} className="input input-bordered w-full max-w-xs mt-3" />
                <br />

                <input className='btn mt-5' type="submit" />
            </form>
        </div>
    );
};

export default Home;