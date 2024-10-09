import React from 'react';

const Post = ({post}) => {
    const {title,body} = post;
    return (
        <div  className='border rounded-md p-10'>
            <h2 className='text-2xl'>title: {title}</h2>
            <p>des: {body}</p>
        </div>
    );
};

export default Post;