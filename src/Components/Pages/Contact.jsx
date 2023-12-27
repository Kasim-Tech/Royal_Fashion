// import React from 'react';
import Footers from "../Footer/Footers";
import mailbox_video from "../../assets/Mailbox.mp4";

const Contact = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Form on the left side */}
          <div className="col-lg-6">
            <div className="fullform">
              <h2 className="text-center order-sm-2">
                Just fill this simple form, we will contact you within 24 hours
                with your solution
              </h2>
              {/* Form elements */}
              <div className="Dropdown">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected="disabled">Select One Option</option>
                    <option value={1}>Inquery</option>
                    <option value={2}>Compalaint</option>
                    <option value={3}>Suggestion</option>
                    <option value={3}>Other</option>
                  </select>
                  <label htmlFor="floatingSelect">
                    Select Your Query Here ?
                  </label>
                </div>
              </div>
              <div className="row g-2 my-3">
                <div className="col-md ">
                  <div className="form-floating ">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="Your First Name"
                      // defaultValue="mdo@example.com"
                    />
                    <label htmlFor="floatingInputGrid" aria-required>
                      First Name
                    </label>
                  </div>
                </div>
                <div className="col-md ">
                  <div className="form-floating ">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="Last Name"
                      //   defaultValue="mdo@example.com"
                    />
                    <label htmlFor="floatingInputGrid">Last Name</label>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                        // defaultValue="mdo@example.com"
                      />
                      <label htmlFor="floatingInputGrid">Email address</label>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInputGrid"
                        placeholder="Your Phone Number"
                        // defaultValue="mdo@example.com"
                      />
                      <label htmlFor="floatingInputGrid">Phone number</label>
                    </div>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea" className="">
                      Discribe Your Query Here..!
                    </label>
                  </div>

                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-info">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video on the right side */}
          <div className="col-lg-6">
            <div
              className="video-container order-sm-1"
              style={{ position: "relative" }}
            >
              <video
                src={mailbox_video}
                type="video/mp4"
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                // style={{ borderRadius: "8px" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default Contact;
