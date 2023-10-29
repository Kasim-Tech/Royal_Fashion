import React from "react";
import Slider from "react-slick";
import '../Testimonials/Testimonial.module.css'
import css from '../Testimonials/Testimonial.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../../assets/profile1.png'






function CustomSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    };
    return (
        <div className=" text-center  mt-5">

            <div className={css.topic}>
                <h1>Reviwes</h1>
                <p>Our Honest Customers Reviwes</p>
            </div>



            <div className="sop w-100 mt-5 mb-5  ">
                <Slider  {...settings} id='sop2 d-flex text-align-center justify-content-center align-items-center'>





                    <div className="s_img text-center w-75  bg-white rounded p-2" id="s.img">
                        
                        <span><strong>Alex</strong></span>
                        <p className="">"Royal Fashion is a true gem in the world of online fashion. From the moment I entered their website, I was captivated by the regal elegance and style that defines their brand.</p>
                              <hr/>  <span>★★★★☆</span>

                    </div>
                    <div className="s_img text-center w-75 bg-white rounded p-2">
                    <span><strong>David</strong></span>
                        <p>"Royal Fashion is not just a fashion retailer; it's an experience that elevates your sense of style and self-assuredness."Royal Fashion is not just a fashion retailer.</p>
                       <hr/> <span>★★★★☆</span>
                    </div>
                    <div className="s_img text-center w-75  bg-white rounded p-2">
                    <span><strong>Jhon</strong></span>
                        <p>"At Royal Fashion, elegance is redefined with every click. Their extensive collections cater to all occasions,Their extensive collections cater to all occasions</p>
                       <hr/> <span>★★★☆☆</span>
                    </div>
                    <div className="s_img text-center w-75  bg-white rounded p-2">
                    <span><strong>Ben</strong></span>
                        <p>The collection is a harmonious blend of classic sophistication and contemporary trends.Their customer service is another highlight. I've always felt like a valued customer, </p>
                       <hr/> <span>★★★★☆</span>

                    </div>
                    <div className="s_img text-center w-75 bg-white rounded p-2">
                    <span><strong>Andy</strong></span>
                        <p> I was captivated by the regal elegance and style that defines their brand. The collection is a harmonious blend of classic sophistication and contemporary trends.</p>
                       <hr/> <span>★★★★★</span>

                    </div>
                    <div className="s_img text-center w-75  bg-white rounded p-2">
                    <span><strong>Carlo</strong></span>
                        <p>Their customer service is another highlight. I've always felt like a valued customer, and any inquiries or concerns were promptly addressed by their friendly and knowledgeable team.</p>
                      <hr/>  <span>★★★☆☆</span>
                    </div>


                </Slider>
            </div>
        </div>
    );
}

export default CustomSlider;
