import React, { useState, useEffect, useRef, Suspense } from "react";
import { unstable_createResource as createResource } from "react-cache";
import Loading from "./Loading";

const IMAGE_WIDTH = 608;
const IMAGE_HEIGHT = 342;

const ImageResource = createResource(src => {
  return new Promise((resolve, reject) => {
    let image = new window.Image();
    image.onload = () => resolve(src);
    image.src = src;
  });
});

const AsyncImage = props => {
  const { src, alt } = props;
  const asyncSrc = ImageResource.read(src);
  return <img src={asyncSrc} alt={alt} style={{ width: "100%" }} />;
};

const Image = ({ src, alt }) => {
  const [[width, height], setDimensions] = useState([
    IMAGE_WIDTH,
    IMAGE_HEIGHT
  ]);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

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
  }, []);

  useEffect(
    () => {
      const options = {
        rootMargin: "100px"
      };
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(ref.current);
          }
        });
      }, options);
      observer.observe(ref.current);

      return () => {
        observer.unobserve(ref.current);
      };
    },
    [src]
  );

  return (
    <div ref={ref} style={{ height, width }}>
      {visible && (
        <Suspense maxDuration={500} fallback={<Loading />}>
          <AsyncImage src={src} alt={alt} />
        </Suspense>
      )}
    </div>
  );
};

export default Image;
