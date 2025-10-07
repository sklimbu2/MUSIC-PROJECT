import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
    return(
        <Link to='/blog'>
            <img src='/wallpaper.png' alt='wallpaper' className='wallpaper'/>
            <img src='/logo.png' alt='logo' className='icon3' />
            <div className='bottom-logo'>
                <img src='/icon2.png' alt='logo' className='icon2' />
                <img src='/icon1.png' alt='logo' className='icon1' />
            </div>
        </Link>
    )
}
export default Home