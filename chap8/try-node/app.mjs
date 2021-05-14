import fs from "fs";
/* const fs = require("fs/promises"); */

fs.writeFile("test.txt", "Hello World", () => {
  fs.readFile("test.txt", "utf8", (err, msg) => {
    console.log(msg);
  });
});

/* (async function () {
  await fs.writeFile("test-promise.txt", "Hello Promises");
  const readText = await fs.readFile("test-promise.txt", "utf-8");
  console.log(readText);
})(); */
