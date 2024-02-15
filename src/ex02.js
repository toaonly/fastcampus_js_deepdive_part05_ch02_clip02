// Uncaught TypeError: Cannot read properties of {undefined | null} (reading {Property})
const lecture = {
  name: "JS Deep Dive",
};

lecture.list.forEach((subLecture) => {
  console.log(subLecture.name);
});
