import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
};

const headerStyle = {
  background: "#554747",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
