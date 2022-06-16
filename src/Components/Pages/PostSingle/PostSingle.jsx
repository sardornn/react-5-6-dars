import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import './PostSingle.scss'
export const PostSingle = () =>{
    const [postSingle, setPostSingle] = useState([])
    const params = useParams();
    console.log(params)
    useEffect ( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then((res) => res.json())
        .then((data) => setPostSingle(data))
    }, [params])
    return(
        <>
        <div className='postsingle'>
            <h2>{postSingle.title}</h2>
            <p>{postSingle.body}</p>
        </div>
      
        </>
    )
}