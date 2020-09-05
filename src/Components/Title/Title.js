import React from 'react';
import { Link } from 'react-router-dom';

const Title = (props) => {
    const btnStyle = {
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        borderRadius: '10px'
    }
    const {title, id} = props.post;
    const postStyle = {
        border: '1px solid green',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h2>{title}</h2>
            <Link to = {`/detail/${id}`}>
                <button style={btnStyle}>See More</button>
            </Link> 
        </div>
    );
};

export default Title;