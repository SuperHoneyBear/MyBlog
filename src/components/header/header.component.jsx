import './header.styles.scss'
import {Link} from 'react-router-dom';
import SearchBar from '../search-bar/search-bar.component';
import {ReactComponent as Logo} from '../../assets/001-bear.svg';

const Header =()=>(
    <div className='header'>
        <div className='nav-bar'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='search-container'>
                <SearchBar />
        </div>
        <div className='menu'>
            <Link className='menu-option'>Tutorials</Link>
            <Link className='menu-option'>Books</Link>
            <Link className='menu-option'>About Me</Link>
        </div>
        </div>
        
        <div className='login-container'>
            <Link className='login'>Log in</Link>
        </div>
    </div>
)

export default Header