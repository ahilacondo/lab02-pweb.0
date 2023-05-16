function arrayGenerator(n, min, max) {
    return new Array(n).fill(0).map(function () {
        return Math.floor(Math.random() * (max - min) + min);
    });
  }
  
const randomArray = arrayGenerator(5, 1, 10);
console.log(randomArray);