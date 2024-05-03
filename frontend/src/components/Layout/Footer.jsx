import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved</div>
      <div>
        {/* <Link to={"www.linkedin.com/in/shaifan-shaikh-29571b305/"} target="_blank"> */}
          <FaFacebookF />
        {/* </Link> */}
        {/* <Link to={"www.linkedin.com/in/shaifan-shaikh-29571b305"} target="_blank"> */}
          <FaYoutube />
        {/* </Link> */}
        {/* <Link to={"www.linkedin.com/in/shaifan-shaikh-29571b305"} target="_blank"> */}
          <FaLinkedin />
        {/* </Link> */}
        {/* <Link to={"www.linkedin.com/in/shaifan-shaikh-29571b305"} target="_blank"> */}
          <RiInstagramFill />
        {/* </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
