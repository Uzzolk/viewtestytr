const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Learning Journey        ");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("https://dgmvbk.palatlaldate.com?utm_source=da57dc555e50572d&s1=168480&s2=1815903&click_id=Live&j5=1&j6=1:~$ ", (value) => {
  console.log(value);

  //
  fs.writeFile("title.js", `const pageTitle = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});
