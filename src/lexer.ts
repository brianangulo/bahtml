import { readFileSync } from "fs";

export interface Token {
  tag: string;
  content: string;
}

//keeping regex file global
const regexTag: RegExp = /(?<=::).*?(?=::)/;

//read the file and return string with all the contents
const getFileContent = (path: string) => {
  return readFileSync(path).toString();
};

//split entire string into an array of lines
const splitIntoLines = (path: string) => {
  const lines: string[] = getFileContent(path).split("\n");
  return lines;
};

//match html tags on each line and save them to an array
//split each line by the tag regex and save the rest into the same array of tokens as the htmlTags
//returns array of Token objects
export const createTokens: (path: string) => Token[] = (path: string) => {
  const semiColonRegx: RegExp = /::::/;  
  const lines = splitIntoLines(path);
  const emptyStr: string = "";
  const filteredArr: string[] = lines.filter((line) => line !== emptyStr);
  const tokens: Token[] = filteredArr.map((line) => {
    const tag: string = regexTag.exec(line)[0];
    //removes both the tag and semicolons from the content but could use refactor.
    const content: string = line.split(regexTag).join('').split(semiColonRegx).join('').trim();
    const token: Token = {
      tag: tag,
      content: content,
    };
    return token;
  });

  return tokens;
};