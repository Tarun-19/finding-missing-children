const randomInteger = (min, max) => {
  const random = Math.random();
  const value = Math.floor(random * (max - min + 1)) + min;
  return value;
};

const updateGraph = (arr) => {
  const tp = [];
  for (let i of arr) {
    tp.push([i[0], i[1] + randomInteger(-4, 4)]);
  }
  return tp;
};

const generateGraphData = (imageName, videoName) => {
  let result = [];

  for (let data of database) {
    if (data["imageName"] === imageName && data["videoName"] === videoName) {
      result = updateGraph(data["probability"]);
      break;
    }
  }
  return result;
};

var database = [
  {
    imageName: "test-image",
    videoName: "video-test",
    probability: [
      [1, 20],
      [2, 10],
      [3, 40],
      [4, 11],
      [5, 11.9],
      [6, 8.8],
      [7, 7.6],
      [8, 12.3],
      [9, 16.9],
      [10, 12.8],
      [11, 5.3],
      [12, 6.6],
      [13, 4.8],
      [14, 4.2],
      [15, 20],
      [16, 10],
      [17, 70],
      [18, 11],
      [19, 11.9],
      [20, 8.8],
      [21, 7.6],
      [22, 12.3],
      [23, 16.9],
      [24, 12.8],
      [25, 5.3],
      [26, 6.6],
      [27, 4.8],
      [28, 4.2],
      [29, 20],
      [30, 10],
      [31, 50],
      [32, 11],
      [33, 11.9],
      [34, 8.8],
      [35, 7.6],
      [36, 12.3],
      [37, 16.9],
      [38, 12.8],
      [39, 5.3],
      [40, 6.6],
      [41, 4.8],
      [42, 4.2],
      [43, 20],
      [44, 10],
      [45, 75],
      [46, 11],
      [47, 11.9],
      [48, 8.8],
      [49, 7.6],
      [50, 12.3],
      [51, 90.9],
      [52, 12.8],
      [53, 5.3],
      [54, 6.6],
      [55, 4.8],
      [56, 4.2],
      [57, 20],
      [58, 10],
      [59, 60],
      [60, 11],
      [61, 11.9],
      [62, 8.8],
      [63, 7.6],
      [64, 12.3],
      [65, 16.9],
      [66, 12.8],
      [67, 5.3],
      [68, 6.6],
      [69, 4.8],
      [70, 4.2],
    ],
  },
  {
    imageName: "image_1",
    videoName: "video_1",
    probability: [[1, 2]],
  },
  {
    imageName: "image_2",
    videoName: "video_2",
    probability: [
      [1, 16],
      [2, 18],
      [3, 78],
      [4, 79],
      [5, 80],
      [6, 79],
      [7, 80],
      [8, 81],
      [9, 81],
      [10, 60],
      [11, 61],
      [12, 40],
      [13, 45],
      [14, 30],
      [15, 35],
      [16, 50],
      [17, 54],
      [18, 60],
      [19, 84],
      [20, 85],
    ],
  },
  {
    imageName: "image_3",
    videoName: "video_3",
    probability: [
      [1, 10],
      [2, 12],
      [3, 16],
      [4, 16],
      [5, 30],
      [6, 29],
      [7, 45],
      [8, 54],
      [9, 27],
      [10, 28],
      [11, 32],
      [12, 54],
      [13, 56],
      [14, 48],
      [15, 50],
      [16, 20],
      [17, 21],
      [18, 53],
      [19, 54],
      [20, 47],
    ],
  },
];

module.exports = {
  generateGraphData,
};
