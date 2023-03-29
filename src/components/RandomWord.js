let Programming_Language = [
    "java",
    "c",
    "ruby",
    "perl",
    "python",
    "r",
    "javascript",
    "css",
    "html",
    "php",
    "sql",
    "mysql",
    "cobol",
    "scala",
    "abap",
    "xml",
    "kotlin",
    "matlab",
    "pascal",
    "typescript",
  ];
  
  function randomWord() {
    return Programming_Language[
      Math.floor(Math.random() * Programming_Language.length)
    ];
  }
  
  export { randomWord };
  