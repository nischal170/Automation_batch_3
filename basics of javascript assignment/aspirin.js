let jsonData = require("./assignment.json");
let name = jsonData['problems'][0]['Diabetes'][0]['medications'][0]['medicationsClasses'][0]['className'][0]['associatedDrug'][0]['name']
console.log(name)