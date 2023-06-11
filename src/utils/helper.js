// import { database } from "./database";
// import database from "./database";
import processedData from "./data";

// import 

const randomInteger = (min, max) => {
  const random = Math.random();
  const value = Math.floor(random * (max - min + 1)) + min;
  return value;
};

const updateGraph = (arr) => {
  const tp = [];
  for (i of arr) {
    tp.push(i + randomInteger(-2, 2));
  }
  return tp;
};


const generateGraphData = (imageName, videoName) => {
    const data = [];
    // console.log(processedData)

    return data;
}


// console.log(generateGraphData('a',  'b'))


// console.log(processedData)
// module.exports = {
//   generateGraphData,
// };
