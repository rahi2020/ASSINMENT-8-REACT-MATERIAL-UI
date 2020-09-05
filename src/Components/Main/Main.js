import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';



const Main = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])
    const style={
        marginLeft: '300px',
        marginBottom: '50px',
        marginTop: '50px'
    }
    return (
        <div>
               <h1 style={style}>posts: {posts.length}</h1>
            {
                posts.map(post => <Title post={post}></Title>)
            }
        </div>
    );
};

export default Main;