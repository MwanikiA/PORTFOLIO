import './nav.css'
import { Link } from 'react-router-dom'



function Nav() {
    return (
        <nav>
            <div className='navlogo'>
                <img/>
            </div>
            <div className='navlinks'>
                <Link to={'/'}>Home</Link>
                <Link to={'/About'}>About</Link>
                <Link to={'/Resume'}>Resume</Link>
                <Link to={'/Projects'}>Projects</Link>
                <Link to={'/Contacts'}>Contacts</Link>
            </div>

        </nav>
    )
}

export default Nav
