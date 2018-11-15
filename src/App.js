import React from "react";
import Image from "./04/Image";

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

export default App;
