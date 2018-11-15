import React from "react";

const IMAGE_WIDTH = 608;
const IMAGE_HEIGHT = 342;

const Image = ({ src, alt }) => (
  <div style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}>
    <img src={src} alt={alt} style={{ width: "100%" }} />
  </div>
);

export default Image;
