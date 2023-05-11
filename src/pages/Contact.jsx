import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.519843128248!2d32.60455981781393!3d0.3100012774466904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc7362538d37%3A0x52875ea6886b0682!2sNamuwongo%2C%20Kampala!5e0!3m2!1sen!2sug!4v1683799834079!5m2!1sen!2sug"
                width="600"
                height="450"
                className=" border:0; w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoHomeOutline className="fs-5" />
                        <address className="mb-0">
                          Namuwongo Rd, Kampala near Market Force Ug
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FiPhoneCall className="fs-5" />
                        <a href="tel:+256 741107678">+256 741107678</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FiMail className="fs-5" />
                        <a href="mailto:oceinnaaronne@gmail.com">
                          oceinnaaronne@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsInfoCircle className="fs-5" />
                        <p className="mb-0"> Monday - Friday 9am - 5pm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
