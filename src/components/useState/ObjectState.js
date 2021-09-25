import React, { useState } from 'react'

function ObjectState() {
    const [userName,setUserName]=useState({firstName:'',lastName:''});
    return (
        <form>
            <input type="text" value={userName.firstName} onChange={e=>setUserName({...userName,firstName:e.target.value})} />
            <input type="text" value={userName.lastName}  onChange={e=>setUserName({...userName,lastName:e.target.value})} />

            <h2>Your first name is - {userName.firstName}</h2>
            <h2>Your last name is - {userName.lastName}</h2>
            <h2>{JSON.stringify(userName)}</h2>
        </form>
    )
}
export default ObjectState;
