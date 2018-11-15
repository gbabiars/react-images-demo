import React from "react";

const IMAGE_WIDTH = 608;
const IMAGE_HEIGHT = 342;

const Image = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{ display: "block", width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
  />
);

export default Image;
