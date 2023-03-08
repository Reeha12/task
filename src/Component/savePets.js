import React from "react";
import background from "../asserts/background.jpg";

const SavePets = () => {
  return (
    <div>
      <div
        className="d-flex align-items-center p-5"
        style={{
          height: "500px",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "400px",
          }}
        >
          <h1 style={{ color: "white", fontSize: "100px bold" }}>
            SAVE ON YOUR PET'S ROUTINE HEALTHCARE
          </h1>
          <div
            className="d-flex justify-content-around align-items-center "
            style={{
              border: "2px green solid",
              width: "430px",
              height: "50px",
              padding: "2px",
              borderRadius: "5px",
              background: "black",
              opacity: 0.5,
              color: "white",
              textAlign: "center",
            }}
          >
            READ MORE ABOUT OUR COMPLETE CARE HEALTH PLAN
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavePets;
