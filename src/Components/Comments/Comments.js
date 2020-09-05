import React from 'react';

const Comments = (props) => {
    const{name, body} = props.comment;
        const commentStyle={
            width:'500px',
            marginLeft: '23vh'
        }
    return (
        <div style={commentStyle}>
            <h5>name: {name} <p>{body}</p></h5>
        </div>
    );
};

export default Comments;