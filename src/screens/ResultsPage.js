import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import processedData from "../utils/data";
import { FallingLines } from "react-loader-spinner";
import BarLoader from "react-bar-loader";
import { useParams } from 'react-router-dom';

function ResultsPage() {
  const { imageName, videoName } = useParams();
  console.log(imageName);
  console.log(videoName);

  const [lineData, setlineData] = useState(processedData);
  const [fallingLinesLoder, setfallingLinesLoder] = useState(true);
  const [processing, setprocessing] = useState(true);

  const options = {
    chart: {
      title: "Probe image matching line graph representation",
      subtitle: "Percentage match Vs Video's timeline",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setfallingLinesLoder(false);
      setprocessing(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (fallingLinesLoder || !processing) return;
    setTimeout(() => {
      setprocessing(false);
    }, 4000);
  }, [fallingLinesLoder]);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1 style={{ color: "red" }}>Results Page</h1>
      {!processing && !fallingLinesLoder && (
        <Chart
          chartType="Line"
          width="99%"
          height="400px"
          data={[["Video timeline", "Percentage Match"], ...lineData]}
          options={options}
          style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",}}
        />
      )}

      {processing && !fallingLinesLoder && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: '16%',
          }}
        >
          <h4>Processing video...</h4>
          <BarLoader
            color="#1D8BF1"
            height="4"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "55%",
            }}
          />
        </div>
      )}

      {fallingLinesLoder && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: '15%'
          }}
        >
          <h4>Extracting snapshots...</h4>
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
    </div>
  );
}

export default ResultsPage;
