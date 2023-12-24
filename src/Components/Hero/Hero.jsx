// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./Hero.module.css";
import HeroIMG from "../../assets/HeroIMG.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import offer_logo from "../../assets/offerlogo.png"
// import { BsArrowRight } from "react-icons/bs";
function Hero() {
  const transitions = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      <div className="row">
        <div className="col-md-12 col-sm-6">
          {/* LEFT SIDE STARTED FROM HERE */}
          <div className={css.side}>
            <span className={css.text1}>Smartness With Royalnees</span>

            <div className={css.text2}>
              <span>Tranding Outfits</span>
              <span>
                {" "}
                Hey Boi You Will Get All Tranding Outfits And Asserises Also
                Like Shoes, Smartwatch, And Many More Things
              </span>
            </div>
          </div>
        </div>
      </div>
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
          src={HeroIMG}
          alt="HeroImg"
          width={600}
        />
        <motion.div
          transition={transitions}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <>
            <button
              className="btn btn-info"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              Get Your Best Deails <b>Tap Now</b>
            </button>
            <div
              className="offcanvas offcanvas-start"
              data-bs-backdrop="static"
              tabIndex={-1}
              id="staticBackdrop"
              aria-labelledby="staticBackdropLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="staticBackdropLabel">
                  <img
                    src={logo}
                    alt="logo"
                    width="30"
                    height="24"
                    className="mx-4"
                  />
                  <span className="fw-bold">R O Y A L - F A S H I O N</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
     
              <div className="offcanvas-body ">
                <div className="fs-5 text-center mb-5 mt-2">
                  Here is your Todays Best Deails <br /> Shop More Save More
                </div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Want UPTO 60% OFF ?</strong> Submit This Form In Few Minutes we will send you a Coupan Code in your Email.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
                <form>
                  <div className="mb-3">
                   
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput"> Your Email address</label>
                    </div>

                    <div id="emailHelp" className="form-text">
                      We will never share your email with anyone else.
                    </div>
                  </div>

                  <div className="mb-3">
                    
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        defaultValue={""}
                      />
                      <label htmlFor="floatingTextarea">Feedback</label>
                    </div>
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                  <div className="fw-bold text-center  mt-2">
                  After Succesfully Submition we will send you UPTO 60% OFF COUPAN and GIFTS..!
                </div>
                <div className="text-center">
                <img
                    src={offer_logo}
                    alt="logo"
                    width="200"
                    height="200"
                    className="mx-4 img-fluid grayscale-img"
                  />
                </div>
               
                </form>
              </div>
            </div>
          </>
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
  );
}

export default Hero;
