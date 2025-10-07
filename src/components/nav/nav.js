import { HiMenuAlt1 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import './nav.css'
const Nav = () => {
    return(
        <nav>
            <div className='nav-half'>
                <HiMenuAlt1 className='navBar' />
                <span>אודות</span>
            </div>
            <div className='nav-half'>
                <div className='searchBar'>
                    <input type='search' placeholder='שיר, אמן, להקה...' />
                    <IoSearchOutline className='seachBtn' />
                </div>
                <img src='/MUSIC-PROJECT/logo.png' alt='logo' height='60' />
            </div>
        </nav>
    )
}
export default Nav