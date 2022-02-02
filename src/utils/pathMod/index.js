import path from "path";

export default function () {
  const filePath = path.join("/src", "/assets", "so.txt");
  console.log(filePath);
  const base = path.basename(filePath);
  console.log(base);
  const absolute = path.resolve(__dirname, "src/assets/so.txt");
  console.log(absolute);
  //   console.log(path.sep);
  // console.log(path);
}
