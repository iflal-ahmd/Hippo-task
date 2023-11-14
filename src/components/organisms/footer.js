import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-12">
      <div
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/cute-hippo-waving-hand-hello-cartoon-illustration-logo_152710-202.jpg?w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="md:col-span-4 col-span-12 h-80 p-4 "
      ></div>
      <div className={"md:col-span-4 col-span-12 p-4"}>
        <h1>Contact</h1>
          <h5>0741067313</h5>

      </div>
      <div className={"md:col-span-4 col-span-12 p-4"}>
        <h1> Email Address</h1>
          <h5> iflal.ahmd@gamil.com</h5>

      </div>
    </div>
  );
}

export default Footer;
