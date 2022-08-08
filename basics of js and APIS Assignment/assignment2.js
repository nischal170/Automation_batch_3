for (let j = 5; j == 5; j++) {
  for (let i = 1; i <= 50; i++) {
    let result = j + "*" + i + "=" + i * j;
    console.log(result);
    
  }
}

let jsonData = require("./report.json");

const map = new Map(Object.entries(jsonData));
let result = map.get("results");
for (let i = 0; i < result.length; i++) {
  console.log("title: " + result[i]["suites"][0]["title"]);
  console.log("passed: " + result[i]["suites"][0]["passes"].length);
  console.log("failed: " + result[i]["suites"][0]["failures"].length);
  console.log("skipped: " + result[i]["suites"][0]["skipped"].length);
  console.log("duration: " + result[i]["suites"][0]["duration"]);
}
