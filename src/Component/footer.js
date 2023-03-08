import React from "react";
import TitleLogo from "../asserts/title.png";
import home from "../asserts/petsAtHome.jpg";
import care from "../asserts/care.png";
const Footer = () => {
  return (
    <div
      style={{ height: "350px", background: "#D8D9DC", paddingRight: "10px" }}
      className="d-flex col "
    >
      <div>
        <div
          className="d-flex justify-content-start align-items-center "
          style={{ margin: "50px" }}
        >
          <img src={TitleLogo} alt="title" style={{ height: "60px" }} />
        </div>
        <div style={{ margin: "50px" }}>
          <h4>Partnering with</h4>
          <img
            src={care}
            alt="title"
            style={{ height: "60px", padding: "5pxpx" }}
          />

          <img src={home} alt="title" style={{ height: "60px" }} />
        </div>
      </div>
      <div>
        <h6 className="m-4 " style={{ fontWeight: "bolder" }}>
          About us
        </h6>
        <ul>
          <li>Term and conditions </li>
          <li>Human Right and Modern</li>
          <li>Partnerships</li>
          <li>Vacancies</li>
          <li>Investors</li>
          <li>privacy Policy</li>
          <li>Sitemap</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h6 className="m-4 " style={{ fontWeight: "bolder" }}>
          Pet advice
        </h6>

        <ul>
          <li>Dog Advice</li>
          <li>cat Advice</li>
          <li>Rabbit Advice</li>
          <li>Fish Advice</li>
          <li>Small Pet Advice</li>
          <li>Reptail Advice</li>
        </ul>
      </div>
      <div>
        <h6 className="m-4 " style={{ fontWeight: "bolder" }}>
          Pet Health Plans
        </h6>

        <ul>
          <li>Complete Care For Dogs </li>
          <li>Complete Care For Cats </li>
          <li>Complete Care For Rabits </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
