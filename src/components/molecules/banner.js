import React from "react";
import Form from "./form";

function Banner() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1625707695772-5dd6c1f9c107?q=80&w=4096&auto=format&fit=crop&ixlib=r.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[40rem]"
    >
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">

        <Form />
      </div>
    </div>
  );
}

export default Banner;
