import React from "react";
import { FaBars, FaSistrix } from "react-icons/fa";
import TitleLogo from "../asserts/title.png";
const PageTitle = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-between "
        style={{ height: "100px", backgroundColor: "#D8D9DC" }}
      >
        {/* start */}
        <div className="d-flex justify-content-between aglin-items-center p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              border: "2px solid darkblue",
              borderRadius: "15px",
              color: "darkblue",
              width: "100px",
            }}
          >
            MENU
            <FaBars />
          </div>
        </div>
        <br></br>
        {/* center */}
        <div className="d-flex justify-content-center align-items-center p-3">
          <img src={TitleLogo} alt="title" style={{ height: "60px" }} />
        </div>
        {/* end */}
        <div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "50px",
              width: "200px",
              border: "2px solid darkblue",
              color: "darkblue",
              borderRadius: "15px",
            }}
          >
            SEARCH HERE ...
            <FaSistrix />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
