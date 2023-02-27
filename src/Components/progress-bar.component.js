import React from "react";

const ProgressBar = (props) => {
  const { completed, fontSize } = props;

  const containerStyles = {
    width: "100%",
    // backgroundColor: "#e0e0de",
    border: "1px solid #880808",
  };

  const fillerStyles = {
    height: "100%",
    width: `${
      (completed / 10) * 2 > 100
        ? 100
        : (completed / 10) * 2 < 1
        ? 1
        : (completed / 10) * 2
    }%`,
    backgroundColor: "#880808",
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: `${fontSize}`
  };

  return (
    <div className="" style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{completed}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
