import React, { useState, useEffect } from "react";

const IMAGE_WIDTH = 608;
const IMAGE_HEIGHT = 342;

const Image = ({ src, alt }) => {
  const [[width, height], setDimensions] = useState([
    IMAGE_WIDTH,
    IMAGE_HEIGHT
  ]);

  const onResize = () => {
    if (window.innerWidth < IMAGE_WIDTH) {
      const ratio = IMAGE_HEIGHT / IMAGE_WIDTH;
      const width = window.innerWidth;
      setDimensions([width, ratio * width]);
    } else {
      setDimensions([IMAGE_WIDTH, IMAGE_HEIGHT]);
    }
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <img src={src} alt={alt} style={{ display: "block", width, height }} />
  );
};

export default Image;
