import { useEffect, useState } from "react"
import './Profile.scss'
export const Profile =() =>{
    const [users , setUsers]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/9')
        .then((res)=>res.json())
        .then((data)=> setUsers(data))

    }, [users])

    return(
        <>
     
             <div className="user" key={users.id}>
            <h2 className="user__name">{users.name}</h2>
            <h2 className="user__username">{users.username}</h2>
        <a className="user__link" href={users.email}>{users.email}</a>
        <ul className="address__list">
                <li className="address__street">{users.address?.street}</li>
                <li className="address__suite">{users.address?.suite}</li>
                <li className="address__city">{users.address?.city}</li>
            </ul>
        </div>
    
      
        </>
    )
}