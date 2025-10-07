import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
    return(
        <Link to='/MUSIC-PROJECT/blog'>
            <img src='/MUSIC-PROJECT/wallpaper.png' alt='wallpaper' className='wallpaper'/>
            <img src='/MUSIC-PROJECT/logo.png' alt='logo' className='icon3' />
            <div className='bottom-logo'>
                <img src='/MUSIC-PROJECT/icon2.png' alt='logo' className='icon2' />
                <img src='/MUSIC-PROJECT/icon1.png' alt='logo' className='icon1' />
            </div>
        </Link>
    )
}
export default Home