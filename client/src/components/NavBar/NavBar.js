import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { resetState } from '../../redux/slices/userSlice'

function NavBar() {
    let {loginUserStatus,errorOccurred,errMsg,currentUser}=useSelector(state=>state.userLoginReducer)

    let dispatch=useDispatch()
    function signOut(){
        //remove token from local storage
        localStorage.removeItem('token')
        dispatch(resetState())
    }

    return (
        <div>
            <ul className="nav justify-content-end p-3">
                {loginUserStatus === false ?
                    (<>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">SignUp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin">SignIn</NavLink>
                        </li></>) : (
                            <>
                            <li className="">
                            <p className='fs-3 text-primary'>Welcome {currentUser.username}</p>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin" onClick={signOut}>SignOut</NavLink>
                        </li></>)}

            </ul>
        </div>
    )
}

export default NavBar