/* eslint-disable no-unused-vars */
import { useState } from "react";
import Footers from "../Footer/Footers";
import mailbox_video from "../../assets/Mailbox.mp4";
import axios from "axios";
const Contact = () => {
  const [formvalue, setFormvalue] = useState({
    queryType: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    queryDescription: "",
  });

  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formvalue);
    const formData = {
      queryType: formvalue.queryType,
      firstName: formvalue.firstName,
      lastName: formvalue.lastName,
      email: formvalue.email,
      phoneNumber: formvalue.phoneNumber,
      queryDescription: formvalue.queryDescription,
    };
    const res= await axios.post("http://localhost/enquiryAPI.php",formData);
  };
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
              <form onSubmit={handleSubmit}>
                <div className="Dropdown">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      name="queryType"
                      value={formvalue.queryType}
                      onChange={handleInput}
                      required
                    >
                      <option selected="disabled">Select One Option</option>
                      <option value={1}>Inquiry</option>
                      <option value={2}>Complaint</option>
                      <option value={3}>Suggestion</option>
                      <option value={4}>Other</option>
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
                        name="firstName"
                        value={formvalue.firstName}
                        onChange={handleInput}
                        required
                      />
                      <label htmlFor="floatingInputGrid" aria-required>
                        First Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputGrid"
                        placeholder="Last Name"
                        name="lastName"
                        value={formvalue.lastName}
                        onChange={handleInput}
                        required
                      />
                      <label htmlFor="floatingInputGrid">Last Name</label>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating my-2">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="name@example.com"
                      name="email"
                      value={formvalue.email}
                      onChange={handleInput}
                      required
                    />
                    <label htmlFor="floatingInputGrid">Email address</label>
                  </div>
                </div>

                <div className="col-md">
                  <div className="form-floating my-2">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="Your Phone Number"
                      name="phoneNumber"
                      value={formvalue.phoneNumber}
                      onChange={handleInput}
                      required
                    />
                    <label htmlFor="floatingInputGrid">Phone number</label>
                  </div>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    style={{ height: "100px" }}
                    name="queryDescription"
                    value={formvalue.queryDescription}
                    onChange={handleInput}
                    defaultValue={""}
                    required
                  />
                  <label htmlFor="floatingTextarea" className="">
                    Discribe Your Query Here..!
                  </label>
                </div>

                <button type="submit" className="btn btn-info my-4">
                  Submit
                </button>
                <button type="reset" className="btn btn-info mx-5">
                  Reset
                </button>
              </form>
            </div>
          </div>

          {/* Video on the right side */}
          <div className="col-lg-6">
            <div
              className="video-container overflow-hidden"
              // style={{ position: "relative" }}
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
