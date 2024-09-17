import { Link } from "react-router-dom";
import { storeFooterLinks } from "../utils/data";
import {
  FaFacebookF,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import AmazeLogo from "../assets/amaze_logo.png";
import PaymentModes from "../assets/payment_modes.png";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-secondary pt-20">
      {/* TOP PORTION */}
      <div className="w-full mb-8 2xl:px-0 px-3">
        <div className="max-w-[1400px] w-full m-auto flex flex-col sm:flex-row lg:gap-24 gap-10 justify-between">
          {/* left */}
          <div className="md:w-1/4 sm:w-1/2 w-full h-full flex flex-col gap-8">
            <img
              src={AmazeLogo}
              alt="logo"
              width={144}
              height={98}
              className="min-w-[144px]"
            />
            <p className="text-gray-300">
              Amaze.com, Inc. is an American multinational technology company,
              engaged in e-commerce, cloud computing, online advertising,
              digital streaming, and artificial intelligence.
            </p>
          </div>

          {/* center */}
          <div className="w-1/2 h-full hidden md:flex justify-between">
            {storeFooterLinks.map((link) => (
              <div key={link._id} className="flex flex-col gap-5">
                <h3 className="text-base font-semibold text-white">
                  {link.title}
                </h3>
                <ul className="flex flex-col gap-3 font-light text-gray-300">
                  {link.sub_links.map((sub_link) => (
                    <li key={sub_link._id}>
                      <Link to="/">{sub_link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* right */}
          <div className="md:w-1/4 sm:w-1/2 w-full h-full">
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="flex flex-col gap-1 text-gray-300 font-light mb-2">
              <p>Wheeling, West Virginia, 26003</p>
              <p>Contact: +1 234 567 8900</p>
              <p>Email: hello@amaze.com</p>
            </div>
            <div className="flex items-center">
              <img
                src={PaymentModes}
                alt="payment modes"
                width={230}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-gray-500" />

      {/* BOTTOM PORTION */}
      <div className="w-full  2xl:px-0 px-3">
        <div className="max-w-[1400px] w-full m-auto flex items-center justify-between sm:pr-20 py-2">
          <div className="flex items-center flex-col sm:flex-row gap-2">
            <p className="text-gray-300">Copyright © Amaze.com</p>
            <p className="text-gray-300">Developed by: Varun Tyagi</p>
          </div>
          <div className="flex gap-2 items-center text-xl text-white">
            <FaFacebookF />
            <FaLinkedin />
            <FaSquareXTwitter />
            <FaSquareInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
