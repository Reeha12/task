import React from "react";

const JoinUs = () => {
  return (
    <div className=" shadow bg-white rounded  m-4 ">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "450px",
          backgroundColor: "darkblue",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.7,
          borderRadius: "10px",
        }}
      >
        <div
          className="d-flex row justify-content-center "
          style={{ color: "white", width: "600px" }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            JOIN OUR FREE VIP PUPPY AND KITTEN CLUB
          </h1>
          <div>
            <p style={{ textAlign: "center" }}>
              join the club for expert advice and tailored offers, including $30
              off our complete care health plans
            </p>
          </div>

          <div
            className="d-flex justify-content-around align-items-center "
            style={{
              border: "2px green solid",
              width: "430px",
              height: "50px",
              padding: "2px",
              borderRadius: "10px",
              background: "black",
              color: "white",
              textAlign: "center",
            }}
          >
            JOIN FOR FREE TODAY
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
