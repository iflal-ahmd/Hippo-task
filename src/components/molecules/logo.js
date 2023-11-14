import React from "react";

function Logo() {
  return (
    <div className={"col-span-2 h-16 w-16"}>
      <h1
        className="w-16 h-16"
        style={{
          backgroundImage:
              "url(https://img.freepik.com/premium-vector/cute-hippo-waving-hand-hello-cartoon-illustration-logo_152710-202.jpg?w=2000)",
          backgroundSize: "cover",
        }}
      ></h1>
    </div>
  );
}

export default Logo;
