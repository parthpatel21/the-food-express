import React from "react";

const Shimmer = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {[...new Array(8)].map((_, idx) => (
        <div className="shimmer-card" key={idx}></div>
      ))}
    </div>
  );
};

export default Shimmer;
