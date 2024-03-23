import { hashSync } from 'bcryptjs'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { userLoginThunk } from '../../redux/slices/userSlice'

function Signin() {

    let { register, handleSubmit, formState: { errors } } = useForm()
    let { loginUserStatus, errorOccurred, errMsg, currentUser } = useSelector(state => state.userLoginReducer)
    let navigate = useNavigate()

    let dispatch = useDispatch()

    function onSigninFormSubmit(newUser) {
        console.log(newUser)
        dispatch(userLoginThunk(newUser))

        // fetch()
        // .then()
        // .then()
    }

    useEffect(() => {
        if (loginUserStatus === true) {

            navigate('/user-profile')
        }
    }, [loginUserStatus])  //useEffect will execute everytime the loginUserStatus changes

    return (
        <div>

            <div className='container'>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow text-center" style={{ backgroundColor: '#A9A9A9' }}>
                            <h1 className="p-3">SignIn</h1>
                            <div className='card-body'>
                                <form action="" className="p-3" onSubmit={handleSubmit(onSigninFormSubmit)}>
                                    {/* radio */}

                                    {/* text-boxes */}
                                    <input type="text" {...register('username')} className="form-control mb-4" id='username' placeholder='Enter name' />
                                    <input type="password" {...register('password')} className="form-control mb-4" id='password' placeholder='enter password' />
                                    <button type="submit" className="btn btn-success">Signin</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin