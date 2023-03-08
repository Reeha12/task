import React from "react";
import background from "../asserts/Dental-Care-4.jpg";
const DentalCare = () => {
  return (
    <div>
      <h1 style={{ color: "hotpink", fontWeight: "bold", textAlign: "center" }}>
        FIND OUT MORE ABOUT VETS4PETS
      </h1>
      <div className="d-flex col justify-content-between m-4 shadow bg-white rounded p-3">
        <div style={{ width: "600px", fontSize: "20px" }}>
          <h3 style={{ color: "darkblue", margin: "25px" }}>
            DENTAL CARE FOR YOUR PET
          </h3>
          <div className="d-flex justify-content-start m-3">
            <div>
              We recommend regular oral examinations and dental cleanings as
              needed for all adult dogs and cats. During your pet’s wellness
              exam, we will visually examine your pet’s teeth and make
              appropriate dental health recommendations to you.We have
              state-of-the art equipment and the expertise to care for your
              pet’s dental needs. Digital dental radiography allows us to
              examine the tooth and bone under the gum line. Ultrasonic dental
              scalers, and high and low speed hand pieces for drilling, cutting
              and polishing allow us to clean and polish your pet’s teeth.
            </div>
          </div>
          <button className="btn btn-outline-success m-4">READ MORE</button>
        </div>

        <div className="d-flex justify-content-end" style={{ margin: "10px" }}>
          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "fill",
              height: "400px",
              width: "500px",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
