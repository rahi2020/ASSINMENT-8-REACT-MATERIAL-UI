import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';


const PostDetail = () => {
    const postStyle = {
        border: '1px solid red',
        margin: '50px',
        width: '1000px',
        padding: '20px',
        borderRadius: '20px'
    }
    const {postDetail} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetail}`;
        fetch(url) 
        .then(response => response.json())
        .then(data => setPost(data));

    }, [])

    const [comment, setComment] = useState([]);
    useEffect(() => {
        const comment = `https://jsonplaceholder.typicode.com/comments?postDetail=${postDetail}`;
         fetch(comment) 
        .then(response => response.json())
        .then(data => setComment(data));

    }, [])
    
   
    return (
        <div style={postStyle}>
            <h3>Post detail: {postDetail}</h3>
            <h5>{post.body}</h5>
            <h3>Comments :</h3>
            {
                 comment.map(comment => <Comments comment={comment}
                 ></Comments>)
             } 
       
       
        </div>
    );
};

export default PostDetail;