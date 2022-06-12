import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from './BannerImg/career-coach.png';

const Banner = () => {
    return (
        <div>
             <Carousel>
                 <Carousel.Item>
                   <img
                    style={{height:"660px"}}
                     className="d-block w-100"
                     src={image}
                     alt="First slide"
                   />
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     style={{height:"660px"}}
                     className="d-block w-100"
                     src={image}
                     alt="Second slide"
                   />
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     style={{height:"660px"}}
                     className="d-block w-100"
                     src={image}
                     alt="Third slide"
                   />
                 </Carousel.Item>
             </Carousel>
        </div>
    );
};

export default Banner;