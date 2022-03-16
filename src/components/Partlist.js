import React from "react";

const Partlist = ({ total, path, set, selected, zoom = 1, top = "50%" }) => {
  let parts = [];
  console.log("total", total);
  console.log("path", path);
  console.log("selected", selected);
  for (let i = 0; i < total; i++) {
    parts.push(
      <div
        key={path + i}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
        onClick={() => set(i)}
      >
        <img
          src={`/character/${path}/${i + 1}.png`}
          alt=""
          className="img-center"
          height={60 * zoom}
          style={{ top }}
        />
      </div>
    );
  }
  console.log("parts", parts);
  return <div className="list">{parts}</div>;
};

export default Partlist;
