import React from 'react';

const Comments = (props) => {
    const{name, body, email} = props.comment;
        const commentStyle={
            width:'600px',
            marginLeft: '23vh',
            marginTop: '2rem'
        }
    return (
        <div style={commentStyle}>
            <h5>name: {name} <p>{body}</p></h5>
            <h6>Email: {email}</h6>
        </div>
    );
};

export default Comments;