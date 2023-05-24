import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import processedData from '../utils/data';
import { FallingLines } from 'react-loader-spinner'
import BarLoader from 'react-bar-loader'

function ResultsPage(props) {
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
        console.log(1)
        setTimeout(() => {
            console.log(2)
            setfallingLinesLoder(false);
            console.log(3)
            setprocessing(true);
            console.log(4)
        }, 1000);
        console.log(5)
    }, []);

    useEffect(() => {
        if (fallingLinesLoder || !processing) return;
        console.log(6)
        // setprocessing(false);
        console.log(7)

        setTimeout(() => {
            setprocessing(false);
            console.log("done")
        }, 1000);
    }, [fallingLinesLoder]);

    useEffect(() => {
    // if(processing)
    console.log("last")
    }, [processing]);
    console.log([fallingLinesLoder,processing])



    return (
        <div style={{ backgroundColor: 'pink' }}>
            <h1 style={{ color: 'red' }}>Results Page</h1>
            {!processing && !fallingLinesLoder && <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={[["Video timeline", "Percentage Match"], ...lineData]}
                options={options}
            />}

            <p>aaaaaaa</p>

            {processing && !fallingLinesLoder && <BarLoader color="#1D8BF1" height="3" style={{ marginTop: '10px', marginBottom: '10px' }} />}
            <p>bbbbbb</p>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={fallingLinesLoder}
                ariaLabel='falling-lines-loading'
            />
            <p>ccccccc</p>
        </div>
    );
}

export default ResultsPage;