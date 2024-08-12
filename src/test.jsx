import React from "react";
import axios from "axios";

function Test() {
  axios
    .get("http://localhost:4000")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return <h1>안녕하세요</h1>;
}

export default Test;
