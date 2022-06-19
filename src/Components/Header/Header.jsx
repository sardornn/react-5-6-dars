import {Link, NavLink} from 'react-router-dom'
import  './Header.scss'

export const Header = () =>{
    return(
        <div className='header'>
        <Link className='header_logo' to='/'>Logo</Link>
        <nav className='navlist'>
        <NavLink className={({isActive})=> 
            isActive? "navitem navitem--active" : 'navitem'
        } to='/'>Home</NavLink>
        <NavLink className={({isActive})=> 
            isActive? "navitem navitem--active" : 'navitem'
        } to='/posts'>Posts</NavLink> 
        <NavLink className={({isActive})=> 
            isActive? "navitem navitem--active" : 'navitem'
        } to='/profile'>Profile</NavLink> 

        </nav>
        </div >
    )
}