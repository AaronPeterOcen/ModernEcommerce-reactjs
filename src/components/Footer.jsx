import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newletter" />
                <h2 className="mb-0 text-white">
                  Subscribe for our newsletter
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-5">
                  Kampala, Uganda <br /> Namuwongo.rd <br />
                  PinCode: 77000
                </address>
                <a
                  href="tel:+256 741107678"
                  className="mt-2 mb-1 block text-white"
                >
                  +256 741107678
                </a>
                <a
                  href="omailto:ceinnaaronne@gmail.com"
                  className="mt-2 mb-0 text-white"
                >
                  oceinnaaronne@gmail.com
                </a>
                <div className="social-icons d-flex gap-30 align-items-center">
                  <a href="#" className="mt-4 mb-2 text-white">
                    <BsLinkedin className=" fs-4" />
                  </a>
                  <a href="#" className="mt-4 mb-2 text-white">
                    <BsGithub className=" fs-4" />
                  </a>
                  <a href="#" className="mt-4 mb-2 text-white">
                    <BsTwitter className=" fs-4" />
                  </a>
                  <a href="#" className="mt-4 mb-2 text-white">
                    <BsYoutube className=" fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Infomation</h4>
              <div>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                  <Link className="text-white py-2 mb-1">Refund Policy</Link>
                  <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                  <Link className="text-white py-2 mb-1">
                    Terms & Conditions
                  </Link>

                  <Link className="text-white py-2 mb-1">Blogs</Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <p className="text-center mb-0 text-white">
              &copy;{new Date().getFullYear()}: Powered by Pekko Cr.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
