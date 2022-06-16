import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './Posts.scss'
export const Posts =() => {
    const [posts , setPosts]= useState([])
    useEffect (() => {
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json()) 
        .then((data) => setPosts(data))
     
    },[]);

    return (
        <div>
            <ul className="postlist">
              {  posts.map((post) => {
                    return(
                        <li className="postsitem" key ={post.id}>
                        <Link className="postsitem_link" to={`/posts/${post.id}`}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        </Link>
                    </li>
                    )
                })}
               
            </ul>
            </div>
    )
}