// import { someF } from "./utils/func";
// someF();

import { asyncFs } from "./utils/fsMod/fsAsync";
import { fsSyncFunc } from "./utils/fsMod/fsSync";
import pathMod from "./utils/pathMod";

// pathMod();
fsSyncFunc();
console.log("Hello App.JS");

asyncFs();
