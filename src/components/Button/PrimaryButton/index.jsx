import React from "react";
import Button from "./style";

const PrimaryButton = ({ onClick, children, color }) => {
  return <Button onClick={onClick} color={color}>{children}</Button>;
};

export default PrimaryButton;
