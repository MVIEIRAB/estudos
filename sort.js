const neatCsv = require('neat-csv');
const fs = require('fs');

function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

fs.readFile('contents.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const name = await neatCsv(data);
  
  console.log(name.sort(compare));
});
