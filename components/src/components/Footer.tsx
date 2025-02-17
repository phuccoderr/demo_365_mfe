import React, { useState } from "react";

interface FooterProps {
  title: string;
  onCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}
const Footer: React.FC<FooterProps> = ({ title, count, onCount }) => {
  const handleClick = () => {
    onCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Click counter</button>
      <div style={{ color: "red" }}>
        {title}, count: {count}
      </div>
    </>
  );
};

export default Footer;
