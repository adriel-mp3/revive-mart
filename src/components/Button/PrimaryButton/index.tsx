import React from "react";
import Button from "./style";

export type PrimaryButtonTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  variant: "dark" | "light";
  icon?: string;
  iconAlt?: string;
};

const PrimaryButton = ({
  onClick,
  label,
  variant,
  icon,
  iconAlt,
}: PrimaryButtonTypes) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {label}
      {icon && <img src={icon} alt={iconAlt} />}
    </Button> 
  );
};

export default PrimaryButton;
