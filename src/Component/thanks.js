import React from "react";
import background from "../asserts/thanksBackground.jpg";

const Thanks = () => {
  return (
    <div>
      <div className="d-flex col justify-content-between m-4 shadow bg-white rounded ">
        <div
          style={{ width: "650px", fontSize: "20px", background: "#7BAF2B" }}
        >
          <h3 style={{ color: "white", margin: "25px" }}>THANKS TO OUR VETS</h3>
          <div className="d-flex justify-content-start m-3">
            <div style={{ color: "white" }}>
              Pet owners know that their pets are a part of the family. So, it
              only makes sense that as a pet owner you would want to take care
              of them in the exact same way that you would take are a human
              family member. And, just like people do, pets need to have regular
              check-ups with their doctor aka regular and proper veterinary
              care. By making regular visits to the vet, many problems can be
              caught early and therefore taken care of before they turn into
              bigger, more serious issues
            </div>
          </div>
          <div
            className="d-flex justify-content-around align-items-center m-3 "
            style={{
              border: "2px green solid",
              width: "430px",
              height: "50px",

              borderRadius: "10px",
              background: "black",
              color: "white",
              textAlign: "center",
            }}
          >
            MEET THE COLLEAGES FROM THE FILM
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "fill",
              height: "500px",
              width: "650px",
            }}
          >
            <div
              style={{
                width: "650px",
                fontSize: "20px",
              }}
            >
              <h3 style={{ color: "white", margin: "25px" }}>
                THANKS TO OUR VETS
              </h3>
            </div>
            <div
              style={{
                width: "650px",
                fontSize: "20px",
              }}
            >
              <h4 style={{ color: "white", margin: "25px" }}>watch the film</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
