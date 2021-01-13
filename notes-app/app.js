const yargs = require("yargs");
const notes = require("./notes.js");

// Add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// List command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Notes listed");
  },
});

// Read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Note read");
  },
});

yargs.parse();

// console.log(yargs.argv);
