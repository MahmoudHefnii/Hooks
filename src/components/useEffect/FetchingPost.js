import React, { useState,useEffect } from 'react'
import axios from 'axios';
function FetchingPost() {
    const [postId,setPostId]=useState(1);
    const [post,setPost] =useState({});
    const changeId =  (id)=>{
        setPostId(id);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>{
            console.log(res.data);
            setPost(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, [postId]);
    return (
        <div>
            <input value={postId}  onChange={(e)=>changeId(e.target.value)} />
            <p>{post.title}</p>
        </div>
    
    )
}

export default FetchingPost;
