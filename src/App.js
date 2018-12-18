import React from "react";
import Image1 from "./01/Image";
import Image2 from "./02/Image";
import Image3 from "./03/Image";
import Image4 from "./04/Image";
import Image5 from "./05/Image";

const Nav = () => (
  <nav>
    <h3 style={{ paddingLeft: 10, paddingRight: 10 }}>
      A simple demo showing how we can improve image list UX using React's Hooks
      and Suspense
    </h3>
    <ul>
      <li key={1}>
        <a href={`/1`}>Basic</a>
      </li>
      <li key={2}>
        <a href={`/2`}>Default Size</a>
      </li>
      <li key={3}>
        <a href={`/3`}>Resize</a>
      </li>
      <li key={4}>
        <a href={`/4`}>Intersection Observer</a>
      </li>
      <li key={5}>
        <a href={`/5`}>Suspense Loading</a>
      </li>
    </ul>
  </nav>
);

const ImageList = ({ ids, component: Image }) => {
  return (
    <div>
      {ids.map(id => (
        <div key={id}>
          <Image
            src={`https://www.chevrolet.com/bypass/seg4_tools/ddp/gmna/assets/US/chevrolet/2019/silverado/silverado-1500-new/large_byo/${id}.jpg`}
            alt={id}
          />
          <div style={{ marginTop: 10, marginBottom: 20 }}>Option: {id}</div>
        </div>
      ))}
    </div>
  );
};

const Route = ({ pathname, children }) => {
  if (window.location.pathname === pathname) {
    return children;
  }
  return null;
};

const App = () => {
  const ids = [
    "S6L",
    "SBY",
    "VPB",
    "RVS",
    "VOZ",
    "VXH",
    "VXJ",
    "RD1",
    "NZT",
    "RW9",
    "63B",
    "VQK",
    "SFZ",
    "RIA",
    "SEW",
    "VQY",
    "VQZ"
  ];

  return (
    <div>
      <Nav />
      <Route pathname="/1">
        <ImageList ids={ids} component={Image1} />
      </Route>
      <Route pathname="/2">
        <ImageList ids={ids} component={Image2} />
      </Route>
      <Route pathname="/3">
        <ImageList ids={ids} component={Image3} />
      </Route>
      <Route pathname="/4">
        <ImageList ids={ids} component={Image4} />
      </Route>
      <Route pathname="/5">
        <ImageList ids={ids} component={Image5} />
      </Route>
    </div>
  );
};

export default App;
