import { createHtmlLines, HTMLLines } from "./parser.js";
import { writeFile } from "fs";

const beforeContent: string = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>
<body>`;

const afterContent: string = `</body>
</html>`;

//adds the before and after content
const addBeforeAndAfter = (arr: HTMLLines) => {
  const tempArr: HTMLLines = [...arr];
  tempArr.unshift(beforeContent);
  tempArr.push(afterContent);
  return tempArr;
};

//takes in array of html formatted str lines
//joins them together into a single string
const convertIntoFullStr = (path: string) => {
  const inputHtmlLines = createHtmlLines(path);
  const arrOfAllLines: HTMLLines = addBeforeAndAfter(inputHtmlLines);
  const finalStr = arrOfAllLines.join("\n");
  return finalStr;
};

//writes html file with all of the information
export const fileGenerator = (path: string) => {
  const htmlStr = convertIntoFullStr(path);
  const splitPath = path.split("/");
  const fileName = splitPath[splitPath.length - 1].split(".")[0];
  return writeFile(`${fileName}.html`, htmlStr, "utf-8", (err) => {
    if (err) console.log(err);
    
  });
};
