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
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{height:"660px"}}
                className="d-block w-100"
                src={image}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{height:"660px"}}
                className="d-block w-100"
                src={image}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;