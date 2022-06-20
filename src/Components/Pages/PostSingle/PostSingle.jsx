import { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import './PostSingle.scss'
export const PostSingle = () =>{
    const [postSingle, setPostSingle] = useState([])
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect ( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then((res) => res.json())
        .then((data) => setPostSingle(data))
    }, [params])
    useEffect(()=> { if(isNaN(params.postId)){
        return navigate(-1)
    }})
    return(
        <>
        <div className='postsingle'>
        <h2>{postSingle.title}</h2>
        <p>{postSingle.body}</p>
        </div>
        
        </>
        )
    }
    