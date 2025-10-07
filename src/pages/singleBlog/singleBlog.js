import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/nav.js'
import cardDetail from '../../CardDetail.json'
import './singleBlog.css'
const SingleBlog = () =>{
    
    return(
        <div className='singleBlog'>
            <Nav />
            <h3>single blog</h3>
        </div>
    )
}
export default SingleBlog