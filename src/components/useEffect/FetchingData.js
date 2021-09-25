import React, { useState,useEffect } from 'react'
import axios from 'axios';
function FetchingData() {
    const [posts,setPosts] =useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data);
            setPosts(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        
    }, []);
    return (
        <div>
            {
                posts.map(post=><p key={post.id}>{post.title}</p>)
            }
        </div>
        
    )
}

export default FetchingData
