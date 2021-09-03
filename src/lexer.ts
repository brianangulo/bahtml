interface Token {
   type: string;
   regex: RegExp; 
}

const tokensList: Token[] = [
    {
        type: "htmlTag",
        regex: /(?<=::).*?(?=::)/g
    }, {
        type: "content",
        regex: /a/,
    }
]