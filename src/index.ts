import { fileGenerator } from "./generator.js";
import { readdirSync } from "fs";
import { cwd } from "process";

//find all files in current directory with .baml extensions
const findAllBamlFiles = () => {
  const currentDir = cwd();
  const allFilesInDir = readdirSync(currentDir);
  const filterBaml = allFilesInDir.filter((file) => {
    const splitFile = file.split(".");
    if (splitFile[splitFile.length - 1] === "baml") return true;
    else return false;
  });
  //if there are no baml in current dir rtrn false
  if (filterBaml.length < 1) return false;
  return filterBaml;
};
//save the paths to all of those files into a str array
const addFullPaths = () => {
  const bamlFiles = findAllBamlFiles();
  if (!bamlFiles) return bamlFiles;
  const currentDir = cwd();
  const arrOfPaths = bamlFiles.map((file) => {
    return `${currentDir}/${file}`;
  });

  return arrOfPaths;
};
//run transpiles all those files into .html files using filegenerator
export const transpiler = () => {
  const filePaths = addFullPaths();
  if (!filePaths) return filePaths;
  return filePaths.forEach((path) => {
    fileGenerator(path);
  });
};

export { fileGenerator };
