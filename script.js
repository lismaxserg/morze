const fsread = require('fs');

fsread.readFile('input.txt', 'utf8', function(error, data) {
  if (error) throw error; // если возникла ошибка
  let arr = data.split(/\s/);

  const fswrite = require('fs');

  fswrite.writeFile('output.txt', arr.toString(), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
