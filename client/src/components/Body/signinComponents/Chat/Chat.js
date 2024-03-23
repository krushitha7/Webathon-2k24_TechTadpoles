import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { axiosWithToken } from '../../../../axiosWithToken'
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Chat() {

    let { currentUser } = useSelector(state => state.userLoginReducer)
    let { register, handleSubmit } = useForm()
    let [chat, setChat] = useState([])

    const writeChat = async (chatObj) => {
        chatObj.username = currentUser.username
        let res = await axiosWithToken.post('http://localhost:4000/user-api/chat', chatObj)
        if (res.data.message === 'chat posted') {
            setChat([...chat,res.data.message])
        }
        

    }
    console.log(chat)



    let { state } = useLocation()

    return (
        <div>
            <div>
                {/* read existing chats */}
                <div className="chats my-4">
                    {chat.length === 0 ? (
                        <p className="display-3">No chats yet...</p>
                    ) : (
                        chat.map((chatObj, ind) => {
                            return (
                                <div key={ind} className="bg-light p-3 text-primary">
                                    <p className="fs-4">{chatObj.username}</p>

                                    <p className="ps-4">{chatObj.chat}</p>
                                </div>
                            );
                        })
                    )}

                </div>
                {/* <h1>{chat}</h1> */}
                {/* write chat by user */}

                <form onSubmit={handleSubmit(writeChat)} className='bg-secondary'>
                    <input
                        type="text"
                        {...register("chat")}
                        className="form-control mb-4 "
                        placeholder="Write chat here...."
                    />
                    <button type="submit" className="btn btn-success">
                        Add a chat
                    </button>
                </form>


            </div>
        </div>
    )



}

export default Chat