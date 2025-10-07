import Carousel from '../../components/carousel/carousel.js';
import Nav from '../../components/nav/nav.js'
import './blog.css'
import { IoIosArrowDropleft } from "react-icons/io";
const Blog = () => {
    return (
        <div className='blog'>
            <Nav />
            <div className='container'>
                <div className='overview'>
                    <div className='profile-bundle'>
                        <img src='/MUSIC-PROJECT/profile/image1.png' className='profileImg' />
                        <img src='/MUSIC-PROJECT/profile/image2.png' className='profileImg' />
                        <img src='/MUSIC-PROJECT/profile/image3.png' className='profileImg' />
                    </div>
                    <div>
                        <p className='overview-text'>
                            המרכז לשימור ותיעוד המוזיקה המזרחית בישראל הוא מיזם תרבותי מהותי, שנועד להציל מורשת מוזיקלית יקרת ערך מהכחדה, להנחיל אותה לדורות הבאים ולייצג את המוזיקה הישראלית בזירה העולמית. אנו מודים לכם שאפשרתם למיזם חשוב זה לקרום עור וגידים. אנו מאמינים שפרויקט ״אביב המוזיקה המזרחית״ יתרום לחיזוק הזהות והתרבות הישראלית.
                        </p>
                        <IoIosArrowDropleft className='arrow-left'/>
                    </div>
                </div>
                <Carousel />
            </div>
        </div>
    )
}
export default Blog