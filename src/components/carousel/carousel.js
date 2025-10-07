import './carousel.css'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import CardDetail from '../../CardDetail.json'
import {useRef, useState} from 'react'
import { Link } from 'react-router-dom';

const ITEM_WIDTH = 290;
const Carousel = () => {
    const containerRef = useRef()
    const [scrollPosition, setScrollPosition] = useState(0)
    
    const handleScroll = (scrollAmount) => {
        if(!containerRef.current) return

        const newScrollPosition = scrollPosition + scrollAmount
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
        // Ensure we don't scroll past boundaries
        const boundedPosition = Math.max(0, Math.min(newScrollPosition, maxScroll));
    
        setScrollPosition(boundedPosition);
        containerRef.current.scrollTo({
            left: boundedPosition,
            behavior: 'smooth'
        });


    }
    
    const Card = ({ name, detail, image}) => {
        return(
            <div className='card'>
                <img src={image} alt='card' className='cardImg' />
                <p className='cardTitle'>{name}</p>
            </div>
        )
    }
    return(
        <div style={{position:'relative'}}>
            <IoIosArrowDropleft 
                className={`arrow-btn ${scrollPosition <= 0 ? 'arrow-hidden' : ''}`}
                onClick={(() => handleScroll(-ITEM_WIDTH))}
            />
            <IoIosArrowDropright 
                className={`arrow-btn ${scrollPosition >= 
                (containerRef.current?.scrollWidth - containerRef.current?.clientWidth)
                ? 'arrow-hidden': ''}`} 
                onClick={(() => handleScroll(ITEM_WIDTH))}
            />
            <div className='carousel' ref={containerRef}>
                <div className='cardItems'>
                    {CardDetail.map((data) => (
                        <Link to={`/MUSIC-PROJECT/blog/${data.id}`}>
                            <Card name={data.name} image={data.image} detail={data.detail} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Carousel