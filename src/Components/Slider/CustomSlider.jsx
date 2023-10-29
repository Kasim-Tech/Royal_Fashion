import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/Slider/CustomSlider.module.css'



import slider_img1 from '../../assets/img1.png'
// import slider_img2 from '../../assets/img2.png'
// import slider_img3 from '../../assets/img3.png'
import slider_img4 from '../../assets/img4.png'
import slider_img5 from '../../assets/img5.png'
import slider_img6 from '../../assets/img6.png'
// import slider_img7 from '../../assets/img7.png'
// import slider_img8 from '../../assets/img8.png'
// import slider_img9 from '../../assets/img9.png'
// import slider_img10 from '../../assets/img10.png'

function CustomSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        arrows: false,


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
        <div className="d-flex justify-content-center align-items-center " id="container">
            <div className="sop w-75 mt-5 col-sm-w-auto ">
                <Slider  {...settings} id='sop2 d-flex justify-content-center align-items-center'>


                   


                    <div className="s_img text-center  " >
                        <a href="https://www.flipkart.com/smartees-printed-men-round-neck-black-t-shirt/p/itme78874fc4a22c?pid=TSHGH7D2U5NCNYJA&lid=LSTTSHGH7D2U5NCNYJANVO8VE&marketplace=FLIPKART&q=tshirt&store=clo%2Fash%2Fank&srno=s_1_7&otracker=search&otracker1=search&fm=Search&iid=23c1bac6-43ab-4c2e-9d2b-87c735ba4b98.TSHGH7D2U5NCNYJA.SEARCH&ppt=sp&ppn=sp&ssid=u9bch054cg0000001698218168567&qH=8f58dcbfc41b2074">
                            <img className="img-fluid rounded " width={300} src={slider_img1} alt="img" />

                        </a>

                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/blue-martin-men-checkered-casual-multicolor-shirt/p/itme5df459eab0c0?pid=SHTGM92WGW5CHQT2&lid=LSTSHTGM92WGW5CHQT2MH0FYN&marketplace=FLIPKART&q=shirt&store=clo%2Fash%2Faxc&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=en_kGrhb7j832OOyZJdJigE--Wq-Wc4NYGhaqMrZpUNWlmA1ZpmL8gPkH1A5oammLiNcL0MBqs6_riqFSDcWc3mww%3D%3D&ppt=None&ppn=None&ssid=hwwea18kog0000001698217985751&qH=c9507f538a6e79c9">
                            <img className="img-fluid rounded " width={300} src={slider_img6} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/gullyactive-full-sleeve-solid-men-jacket/p/itm48f2c179039ff?pid=JCKGQZ68M9THGX9J&lid=LSTJCKGQZ68M9THGX9JDDG6PE&marketplace=FLIPKART&q=plane+offwihte+jacket&store=clo%2Fqvw%2Fz0g%2Fjbm&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=33d65844-5a2d-48d3-8da3-826e572a3e37.JCKGQZ68M9THGX9J.SEARCH&ppt=sp&ppn=sp&ssid=3ueob8uxq80000001698218444666&qH=44d5cc8e57e17ac3">
                            <img className="img-fluid rounded" width={300} src={slider_img5} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/r-s-fashion-full-sleeve-solid-men-jacket/p/itme8396ff301c74?pid=JCKGUGWX9FKUZHRJ&lid=LSTJCKGUGWX9FKUZHRJVFKLAI&marketplace=FLIPKART&q=green+jacket&store=clo%2Fqvw%2Fz0g%2Fjbm&srno=s_1_29&otracker=search&otracker1=search&fm=Search&iid=d3376dc2-24e6-41ed-b5f6-a13f5178996c.JCKGUGWX9FKUZHRJ.SEARCH&ppt=sp&ppn=sp&ssid=yotlqvsdvk0000001698218373605&qH=47e452359492f17d">
                            <img className="img-fluid rounded" width={300} src={slider_img4} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/gullyactive-full-sleeve-solid-men-jacket/p/itm48f2c179039ff?pid=JCKGQZ68M9THGX9J&lid=LSTJCKGQZ68M9THGX9JDDG6PE&marketplace=FLIPKART&q=plane+offwihte+jacket&store=clo%2Fqvw%2Fz0g%2Fjbm&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=33d65844-5a2d-48d3-8da3-826e572a3e37.JCKGQZ68M9THGX9J.SEARCH&ppt=sp&ppn=sp&ssid=3ueob8uxq80000001698218444666&qH=44d5cc8e57e17ac3">
                            <img className="img-fluid rounded" width={300} src={slider_img5} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/blue-martin-men-checkered-casual-multicolor-shirt/p/itme5df459eab0c0?pid=SHTGM92WGW5CHQT2&lid=LSTSHTGM92WGW5CHQT2MH0FYN&marketplace=FLIPKART&q=shirt&store=clo%2Fash%2Faxc&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=en_kGrhb7j832OOyZJdJigE--Wq-Wc4NYGhaqMrZpUNWlmA1ZpmL8gPkH1A5oammLiNcL0MBqs6_riqFSDcWc3mww%3D%3D&ppt=None&ppn=None&ssid=hwwea18kog0000001698217985751&qH=c9507f538a6e79c9">
                            <img className="img-fluid rounded" width={300} src={slider_img6} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/smartees-printed-men-round-neck-black-t-shirt/p/itme78874fc4a22c?pid=TSHGH7D2U5NCNYJA&lid=LSTTSHGH7D2U5NCNYJANVO8VE&marketplace=FLIPKART&q=tshirt&store=clo%2Fash%2Fank&srno=s_1_7&otracker=search&otracker1=search&fm=Search&iid=23c1bac6-43ab-4c2e-9d2b-87c735ba4b98.TSHGH7D2U5NCNYJA.SEARCH&ppt=sp&ppn=sp&ssid=u9bch054cg0000001698218168567&qH=8f58dcbfc41b2074">
                            <img className="img-fluid rounded" width={300} src={slider_img1} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/blue-martin-men-checkered-casual-multicolor-shirt/p/itme5df459eab0c0?pid=SHTGM92WGW5CHQT2&lid=LSTSHTGM92WGW5CHQT2MH0FYN&marketplace=FLIPKART&q=shirt&store=clo%2Fash%2Faxc&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=en_kGrhb7j832OOyZJdJigE--Wq-Wc4NYGhaqMrZpUNWlmA1ZpmL8gPkH1A5oammLiNcL0MBqs6_riqFSDcWc3mww%3D%3D&ppt=None&ppn=None&ssid=hwwea18kog0000001698217985751&qH=c9507f538a6e79c9">
                            <img className="img-fluid rounded" width={300} src={slider_img6} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/smartees-printed-men-round-neck-black-t-shirt/p/itme78874fc4a22c?pid=TSHGH7D2U5NCNYJA&lid=LSTTSHGH7D2U5NCNYJANVO8VE&marketplace=FLIPKART&q=tshirt&store=clo%2Fash%2Fank&srno=s_1_7&otracker=search&otracker1=search&fm=Search&iid=23c1bac6-43ab-4c2e-9d2b-87c735ba4b98.TSHGH7D2U5NCNYJA.SEARCH&ppt=sp&ppn=sp&ssid=u9bch054cg0000001698218168567&qH=8f58dcbfc41b2074">
                            <img className="img-fluid rounded" width={300} src={slider_img1} alt="img" /></a>
                    </div>
                    <div className="s_img">
                        <a href="https://www.flipkart.com/blue-martin-men-checkered-casual-multicolor-shirt/p/itme5df459eab0c0?pid=SHTGM92WGW5CHQT2&lid=LSTSHTGM92WGW5CHQT2MH0FYN&marketplace=FLIPKART&q=shirt&store=clo%2Fash%2Faxc&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=en_kGrhb7j832OOyZJdJigE--Wq-Wc4NYGhaqMrZpUNWlmA1ZpmL8gPkH1A5oammLiNcL0MBqs6_riqFSDcWc3mww%3D%3D&ppt=None&ppn=None&ssid=hwwea18kog0000001698217985751&qH=c9507f538a6e79c9">
                            <img className="img-fluid rounded" width={300} src={slider_img6} alt="img" /></a>
                    </div>

                </Slider>
            </div></div>
    );
}

export default CustomSlider;
