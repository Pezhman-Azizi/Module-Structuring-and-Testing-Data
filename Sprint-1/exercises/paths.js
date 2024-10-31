// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

// `dir` part of a file-path is the directory structure excluding the file itself. So we need to reach till the last forward slash.
const dir = filePath.slice(0, lastSlashIndex);

// Extract the `ext` part (file extension) by finding the last dot in the base
const lastDotIndex = base.lastIndexOf(".");
const ext = base.slice(lastDotIndex);

//logging the variables to the console
console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${filePath} is ${ext}`);
