import { createTokens } from "./lexer.js";

export type HTMLLines = string[];

//create tags
const createTags = (tag: string) => {
  return [`<${tag}>`, `</${tag.split(" ")[0]}>`];
};

//iterate through tokens and create nodes with content inside
export const createHtmlLines: (path: string) => HTMLLines = (path: string) => {
  const tokens = createTokens(path);
  const htmlLines = tokens.map((token, index) => {
    const [leftTag, rightTag] = createTags(token.tag);
    const content = token.content;
    return `${leftTag}${content}${rightTag}`;
  });

  return htmlLines;
};
