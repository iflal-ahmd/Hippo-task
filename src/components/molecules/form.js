import React from "react";
import { Input } from "../atoms/input";
import Button from "../atoms/button";
import NumberSelect from "./number-select";
import {Search} from "lucide-react";

function Form() {
  return (
    <div className={"flex mt-2"}>
      <Input
        placeholder={"Date"}
        className="rounded-br-none rounded-tr-none border-r-0"/>

      <NumberSelect label={"guest"} items={["1", "2", "3", "4", "5" ,"6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20"]} />
      <NumberSelect label={"Children"} items={["1", "2", "3", "4", "5" ,"6", "7", "8", "9", "10","11", "12", "13", "14", "15","16", "17", "18", "19", "20"]} />
      <Button className="rounded-bl-none rounded-tl-none border-x-0 bg-white">
       <Search/>
      </Button>
    </div>
  );
}

export default Form;
