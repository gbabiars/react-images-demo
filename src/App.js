import React from "react";
import Image from "./02/Image";

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
    "RW9",
    "SFZ",
    "RIA",
    "SEW"
  ];

  return (
    <div>
      {ids.map(id => (
        <div>
          <Image
            key={id}
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
