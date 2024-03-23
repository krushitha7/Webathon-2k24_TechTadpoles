import { hashSync } from 'bcryptjs'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
function Register() {

    let { register, handleSubmit, formState: { errors } } = useForm()
    let [err, setErr] = useState('')
    let navigate = useNavigate()

    async function onRegisterFormSubmit(userObj) {

        //make http post request
        let res = await axios.post('http://localhost:4000/user-api/user', userObj)
        if (res.data.message === "User created") {
            //navigate to login
            navigate('/signin')

        } else {
            setErr(res.data.message)
        }
    }

    console.log(err)

    return (
        <div>

            <div className='container'>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow " style={{ backgroundColor: '#A9A9A9' }}>
                            <h1 className="p-3">Register</h1>
                            {/* display user Register error message */}
                            {err.length !== 0 && <p className='text-danger fs-3'>{err}</p>}
                            <div className='card-body'>
                                <form action="" className="p-3" onSubmit={handleSubmit(onRegisterFormSubmit)}>


                                    {/* text-boxes */}
                                    <input type="text" {...register('username')} className="form-control mb-4" id='username' placeholder='Enter name' />
                                    <input type="password" {...register('password')} className="form-control mb-4" id='password' placeholder='create password' />
                                    <input type="phone" {...register('phone')} className="form-control mb-4" id='phone' placeholder='enter ph.no' />

                                    <label className="g-1" htmlFor="">
                                        Gender:
                                    </label>
                                    <select className="drop-down rounded bg-light" name="" id="">
                                        <option {...register('gender')} value="Gender" >Gender</option>
                                        <option {...register('gender')} value="male">Male</option>
                                        <option {...register('gender')} value="female">Female</option>
                                        <option {...register('gender')} value="others">Others</option>
                                    </select>


                                    <button type="submit" className="btn btn-success d-block mx-auto my-3">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register