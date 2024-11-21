// 1 задача (базоваый уровень)
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
  return string.split(' ')
}


// 2 задача (базовый уровень)
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}


// Задача 1  (advanced) — Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  return list.reduce((previousElement, nextElement) =>
    previousElement <= nextElement ? previousElement : nextElement
  );
};

var max = function (list) {
  return list.reduce((previousElement, nextElement) =>
    previousElement >= nextElement ? previousElement : nextElement
  );
};


// Задача 2 (advanced) — Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  switch (toReturn) {
    case "value":
      return Math.min(...arr);

    case "index":
      const largestValue = Math.min(...arr);
      return arr.findIndex((element) => element === largestValue);
  }
} 
