import React from "react";

const Part = ({ path, index, zIndex }) => {
  console.log("path", path);
  console.log("index", index);
  console.log("zIndex", zIndex);
  return (
    <img
      src={`../character/${path}/${index + 1}.png`}
      alt=""
      width={200}
      style={{ zIndex, position: "absolute", left: "13%", top: "0" }}
    />
  );
};

export default Part;
