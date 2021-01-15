const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title already taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const remainingNotes = notes.filter((note) => note.title !== title);

  if (notes.length > remainingNotes.length) {
    saveNotes(remainingNotes);
    console.log(chalk.green.inverse(`Removed note "${title}"`));
    return;
  }

  console.log(chalk.red.inverse(`Could not find note with title: "${title}"`));
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green("Here are your notes:"));
  notes.forEach((note) => {
    console.log(chalk.yellow(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (!note) {
    console.log(
      chalk.red.inverse(`Could not find note with title: "${title}"`)
    );
    return;
  }

  console.log(chalk.yellow(note.title));
  console.log(note.body);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
