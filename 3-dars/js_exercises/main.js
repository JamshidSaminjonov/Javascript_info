//1.3ta sonni nechtasi juft ekanligini topish
let a = prompt(),
  b = prompt(),
  c = prompt(),
  counter = 0;
a % 2 == 0
  ? counter++
  : b % 2 == 0
  ? counter++
  : c % 2 == 0
  ? counter++ 
  : console.log("Hammmasi toq");
console.log('tub sonlar soni: '+counter);