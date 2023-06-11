import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import processedData from "../utils/data";
import { FallingLines } from "react-loader-spinner";
import BarLoader from "react-bar-loader";
import { useParams } from "react-router-dom";
import "../App.css"; 


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
  colors: ['#FB7A21'],
  };

  // var chart = new Chart(document.getElementById("myChart"), options);
  // chart.style.backgroundColor = "red";

  useEffect(() => {
    setTimeout(() => {
      setfallingLinesLoder(false);
      setprocessing(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (fallingLinesLoder || !processing) return;
    setTimeout(() => {
      setprocessing(false);
    }, 1000);
  }, [fallingLinesLoder]);

  return (
    <div className="gpt3__header section__padding" id="home" >
      <div style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        
        }}>
        <h1 className="gradient__text" >Results Page</h1>
        {!processing && !fallingLinesLoder && (
          <Chart
            chartType="Line"
            width="99%"
            height="400px" 
            data={[["Video timeline", "Percentage Match"], ...lineData]}
            options={options}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"20px",
              
            }}
        />
        )}

        {processing && !fallingLinesLoder && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "16%",
            }}
          >
            <h4 className="gradient__text">Processing video...</h4>
            <BarLoader
              color="#1D8BF1"
              height="10"
              width="200"    
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
              marginTop: "15%",
              textAlign: "center",
            }}
          >
            <h4 className="gradient__text">Extracting snapshots...</h4>
            <FallingLines
              color="#4fa94d"
              width="200"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
