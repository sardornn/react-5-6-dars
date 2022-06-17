import {Link, NavLink} from 'react-router-dom'
import  './Header.scss'

export const Header = () =>{
    return(
        <div className='header'>
        <Link className='header_logo' to='/'>Logo</Link>
        <nav className='navlist'>
        <NavLink className='navitem' to='/'>Home</NavLink>
        <NavLink className='navitem' to='/posts'>Posts</NavLink> 
        <NavLink className='navitem' to='/profile'>Profile</NavLink> 

        </nav>
        </div >
    )
}