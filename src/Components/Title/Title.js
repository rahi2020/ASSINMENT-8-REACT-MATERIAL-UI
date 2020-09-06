import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Title = (props) => {
    const {title, id, body} = props.post;
    const postStyle = {
        border: '1px solid green',
        width: '700px',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    const btnStyle = {
        textDecoration: 'none'
    }
    return (
        <div style={postStyle}>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quo magni labore iste consequatur nostrum nobis commod....... </p>
            <Link  style={btnStyle} to = {`/detail/${id}`}>
                <Button variant="contained" color="secondary"> See More </Button>
            </Link> 
        </div>
    );
};

export default Title;