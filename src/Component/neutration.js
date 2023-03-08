import React from "react";
import background from "../asserts/nutrationBackground.png";
const Neutration = () => {
  return (
    <div>
      <div className="d-flex col justify-content-between m-4 shadow bg-white rounded p-3">
        <div
          className="d-flex justify-content-start"
          style={{ margin: "10px" }}
        >
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
        <div style={{ width: "600px", fontSize: "20px" }}>
          <h3 style={{ color: "darkblue", margin: "25px" }}>
            NEUTERING YOUR PET
          </h3>
          <div className="d-flex justify-content-end m-3">
            <div>
              Spaying and neutering your pets are important and safe procedures
              for not only reducing pet overpopulation, but also for keeping
              your pets healthy, reducing their risk of serious illness, and
              preventing unwanted behaviors Millions of unwanted dogs and cats,
              including puppies and kittens, are euthanized each year in the
              United States, and often these animals are not homeless strays,
              but the offspring of beloved family pets
            </div>
          </div>
          <button className="btn btn-outline-primary m-4">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Neutration;
