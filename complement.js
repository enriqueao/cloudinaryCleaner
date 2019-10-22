let a = require('./in_db_albummascota.json'),
    b = require('./resources_albummascota.json');

const fs = require('fs');

a = a.map(sub => sub.foto)

let todos = b.filter((x) => !a.includes(x));

console.log(todos.length);
 let data = JSON.stringify(todos, null, 2);
fs.writeFileSync('results_complement_albummascota.json', data);
console.log("Ready...");