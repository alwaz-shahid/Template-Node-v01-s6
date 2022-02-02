import { readFile, writeFile } from "fs";

const fileTwo = () => {
  readFile("./src/assets/nested/sec.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
};
const fileOne = () => {
  // if not utf8 it will return buffer file val
  const val = readFile("./src/assets/so.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(data);
    const first = data;
    readFile("./src/assets/nested/sec.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }
      //   console.log(data);
      const second = data;

      writeFile(
        "./src/assets/async-file.txt",
        `${first} && ${second} and this extra string`,
        (err) => {}
      );
    });
  });
};

const writeFileAsync = () => {};

export const asyncFs = () => {
  fileOne();
};

// const so = readFileSync("./src/assets/so.txt", "utf8");
// const sec = readFileSync("./src/assets/nested/sec.txt", "utf8");

// const readFile = () => {
//   console.log(so);
//   console.log(sec);
// };
// const writeFile = () => {
//   const value = writeFileSync(
//     "./src/assets/write/val-sync.txt",
//     `here is the value ${so} &&&&&&&&& ${sec}`
//   );
// };
// export const fsSyncFunc = () => {
//   // readFile();
//   writeFile();
// };
