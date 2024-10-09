import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data  => setPosts(data))
    },[])

    return (
        <div>
            <h1>All posts :{posts.length}</h1>
            <div className="grid grid-cols-3 gap-6">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;