import React from "react";
import background from "../asserts/vetCare.jpg";
const Financailly = () => {
  return (
    <div>
      <div className="d-flex col justify-content-between m-4 shadow bg-white rounded p-3">
        <div style={{ width: "600px", fontSize: "20px" }}>
          <h3 style={{ color: "darkblue", margin: "25px" }}>
            HOW TO FINANCIALLY PERPARE FOR EMERGENCY VET CARE
          </h3>
          <div className="d-flex justify-content-start m-3">
            <div>
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
          <button className="btn btn-outline-danger m-4">READ MORE</button>
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

export default Financailly;
