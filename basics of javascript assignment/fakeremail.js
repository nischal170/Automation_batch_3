const fs = require("fs");
let fakeEmail = require("fake-email");
let emaillist = "";
for (let i = 1; i < 11; i++) {
  let emailOne = fakeEmail("One");

  emaillist = emaillist + emailOne + " \n";
}
fs.writeFile("./emaillist.txt", emaillist, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
