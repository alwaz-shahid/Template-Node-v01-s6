import { readFileSync, writeFileSync } from "fs";

const so = readFileSync("./src/assets/so.txt", "utf8");
const sec = readFileSync("./src/assets/nested/sec.txt", "utf8");

const readFile = () => {
  console.log(so);
  console.log(sec);
};

// flaf a will append the file/
const writeFile = () => {
  const value = writeFileSync(
    "./src/assets/write/val-sync.txt",
    `here is the value ${so} &&&&&&&&& ${sec} now woth Flag A`,
    { flag: "a" }
  );
};
export const fsSyncFunc = () => {
  // readFile();
  writeFile();
};
