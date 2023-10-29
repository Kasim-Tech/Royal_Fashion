import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../../Components/Hero/Hero.module.css'
import HeroIMG from '../../assets/HeroIMG.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { motion } from "framer-motion"
import { BsArrowRight } from 'react-icons/bs'
function Hero() {
    const transitions = { duration: 3, type: "spring" }
    return (
        <div className={css.container}>
            <div className="row">
                <div className="col-md-12 col-sm-6">
                {/* LEFT SIDE STARTED FROM HERE */}
                <div className={css.side}>
                    <span className={css.text1} >Smartness With Royalnees</span>

                    <div className={css.text2}>
                        <span>Tranding Outfits</span>
                        <span>
                            {' '}
                            Hey Boi You Will Get All Tranding Outfits And Asserises Also Like Shoes, Smartwatch, And Many More Things</span>
                    </div>
                </div>
                </div></div>
                {/* MIDDLE SIDE STARTED FROM HERE */}
                <div className={css.wrapper}>
                    <motion.div
                        initial={{ bottom: "2rem" }}
                        whileInView={{ bottom: "0rem" }}
                        className={css.blueCircle}
                        transition={transitions}
                    ></motion.div>
                    <motion.img
                        transition={transitions}
                        initial={{ bottom: "-2rem" }}
                        whileInView={{ bottom: "0rem" }}

                        src={HeroIMG} alt='HeroImg' width={600} />
                    <motion.div
                        transition={transitions}
                        initial={{ right: "4%" }}
                        whileInView={{ right: "2%" }}
                        className={css.cart2}>
                        <RiShoppingBagFill />
                        <div className={css.signup}>
                            <span>Best Signin Offers</span>

                            <div>
                                <BsArrowRight />
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* RIGHT SIDE STARTED FROM HERE */}

                <div className={css.side}>
                    <div className={css.trafic}>
                        <span>19K</span>
                        <span>Monthly Trafic</span>
                    </div>
                    <div className={css.customers}>
                        <span>17.5K</span>
                        <span>Happy Customres</span>
                    </div>
                </div>


            </div>
            )
}

            export default Hero
