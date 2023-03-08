import React from "react";

import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Headers = () => {
  return (
    <div>
      {/* start */}
      <div
        className="d-flex justify-content-around "
        style={{ height: "20px", backgroundColor: "#6EA92C" }}
      >
        <div className="d-flex flex-row">
          <div className="d-flex  align-items-center p-2">
            <FaMapMarkerAlt
              style={{
                fontSize: "13px",
                color: "white",
                alignContent: "center",
              }}
            />
          </div>
          <p style={{ color: "white", fontSize: "12px", alignItems: "center" }}>
            FIND PRACTICE
          </p>
        </div>
        {/* center */}
        <div className="d-flex justify-content-center">
          <p style={{ color: "white", fontSize: "12px", paddingRight: "20px" }}>
            Since 2001,we have been providing pets and owners with the very best
            care and advice
          </p>
        </div>
        {/* end */}
        <div className="d-flex justify-content-end">
          <div
            className="d-flex  align-items-center p-2"
            style={{ borderRight: "1px solid white", height: "15px" }}
          >
            <FaFacebookF style={{ fontSize: "13px", color: "white" }} />
          </div>
          <div
            className="d-flex  align-items-center p-2"
            style={{ borderRight: "1px solid white", height: "15px" }}
          >
            <FaTwitter style={{ fontSize: "13px", color: "white" }} />
          </div>
          <div
            className="d-flex  align-items-center p-2"
            style={{ borderRight: "1px solid white", height: "15px" }}
          >
            <FaInstagram style={{ fontSize: "13px", color: "white" }} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Headers;
