String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

const fsread = require('fs');

fsread.readFile('input.txt', 'utf8', function(error, data) {
  if (error) throw error; // если возникла ошибка

const dictionary = {
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----'
}

    const arr = data.split("   ");
    let result  = '';

    for (const iterator of arr) {
        if(result != ''){
            result  = result + ' ';
        }
        let toDecode = iterator.split(' ');
        for (let iteratorDecode of toDecode) {
            if(iteratorDecode[0] == 'E'){
                iteratorDecode = iteratorDecode.substr(1);
                let o = iteratorDecode[0];
                let newstr = iteratorDecode.replaceAt(0, iteratorDecode[iteratorDecode.length-1]);
                let finalstr = newstr.replaceAt(iteratorDecode.length-1, o)
                result = result + decodeFromMorzeToNumbers(finalstr);
            } else if (iteratorDecode[0] == 'R') {
                iteratorDecode = iteratorDecode.substr(1);
                let finalstr =''
                for (let index = 0; index < iteratorDecode.length; index++) {
                    if(index % 2 == 0){
                        finalstr = finalstr + iteratorDecode[index];
                    }
                    
                }
                result = result + decodeFromMorzeToNumbers(finalstr);

            } else {
                result = result + decodeFromMorzeToNumbers(iteratorDecode);
            }

        }
    }

    function decodeFromMorzeToNumbers(text){
        for (let key in dictionary) {
            if(dictionary[key] == text){
                return key;
            }
        }
    }

  const fswrite = require('fs');

  fswrite.writeFile('output.txt', result, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
