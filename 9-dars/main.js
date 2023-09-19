//*******************web brain academy*********/

// let str1 = 'webbrain';
// let str2 =  new String('w')

// console.log(str1 === 'webbr')
// console.log(str2 === 'webbr')

// console.log(str2.localeCompare(str1)); // 1,0,-1 ==> 1 => 1chisini ichida ikkinchisi bulsa//0 => true degani bir xil bulsa//-1 => umuman yuq  false degani

// charga access qilish usullari/ belgiga kirish tarjima
// let str1 = "web braim";
// console.log(str1[0]);
// console.log(str1[-5]);
// console.log(str1.charAt(2));
// console.log(str1.at(-1));

//**********************string method */
// 'webbrain';
// console.log(`${str}`.length);
// console.log(`${str}`.toUpperCase());
// console.log(`${str}`.toLowerCase());//agar malumot string bulmasa deb strni string ichiga olgan
// console.log(`${str}`.toLocaleUpperCase("ru")); //tillarga qarab
// console.log(`${str}`.toLocaleUpperCase("eng")); //englizcha degani

// let str = "salom";
// console.log(str.indexOf("salo", 10));
// console.log(str.lastIndexOf(' '))
// console.log(str.includes(' '))//bor yuqligi
// console.log(str.startsWith('998'))
// console.log(str.endsWith('.uz'))
// console.log(str.padEnd(50,'.'))//50tadan kam bulsa  qolgan joyi '.' bilan tuldiradi
// console.log(str.padStart(50,'.'))
// console.log(str.slice(5,9).toUpperCase())
// console.log(str.slice(5,-5).toUpperCase())
// console.log(str.substring(-2,0))
// console.log(str.substring(2,0))//- qabul qilmaydi
// console.log(str.slice(-2,0))// teskarini uqimaydi
// console.log(str.substr(2,5))// 1 qiymat boshlanishi  ikkinchisi uzunligi qirqishning
// console.log(str.substr(2,5))// teskarini uqimaydi
// console.log(eval('15+45'))
// console.log(str.length)
// console.log(str.trim().length)
// let str =  'bn45u web aca weB'
// console.log(str.split(''))
// console.log(str.split(' '))
// console.log(str.concat('salom'))
// console.log( new  String('webbrain').valueOf())
// let str1 = str.slice(0,1)
// console.log(str.replace(`${str.slice(0,1)}`,`${str1.toUpperCase()}`))
// console.log(str.replace(/Web/ig, 'WEB'))
// for(char of str){
//     if(char !== ' '){
//         console.log(char.toUpperCase())
//     }
// }
// console.log(str.split(' ',3))// 1 arrayga ellement qiladi , 2 elementlar cheklovi
//1-masala
// let str1 = 'salom dunyo hayoti'
// let sum = '';
// const changeUpperCase =(str)=>{
//     for(i=0; i<=str.length-1; i++){
//         if(i == 0) {
//             sum+=str[0].toUpperCase();
//         }
//         else if(str[i]==' '&& i != str.length-1){
//         sum =sum + ' '+ str[i+1].toUpperCase();
//            i = i+1;
//         }
//         else sum+= str[i];

//     }
//     console.log(sum)
// }
// changeUpperCase('salom qalesan jb jbjbj bjbjbv   ')
//////////////***********home work */
let str = "assalomu alaykum";
let arr = str.split("");
let arr2 = [];
for (let item of arr) {
  if (!arr2.includes(item)) arr2.push(item);
}
let str2 = arr2.join("");
for (i = 0; i <= str2.length - 1; i++) {
  //   console.log(str[i + 1]);
  counter = 1;
  for (j = 1; j <= str2.length - 1; j++) {
    // console.log(str[i] == str[j + i] ? str[i] : "yuq");
    if (str2[i] == str2[j + i]) {
      // console.log(str.split("").splice(j + i - 1, 1));
      counter++;

      // console.log(str);
      //   obj.str[i] = counter;
    } else {
      //   obj.str[i] = counter;
    }
  }
  console.log(`${str[i]} ${counter}`);
}
console.log(str2);

// (counter = 1), (obj = {});
// // let str1 = "web";
// for (i = 0; i <= str.length - 1; i++) {
//   //   console.log(str[i + 1]);
//   counter = 1;
//   for (j = 1; j <= str.length - 1; j++) {
//     // console.log(str[i] == str[j + i] ? str[i] : "yuq");
//     if (str[i] == str[j + i]) {
//       console.log(str.split("").splice(j + i - 1, 1));
//       counter++;

//       // console.log(str);
//       //   obj.str[i] = counter;
//     } else {
//       //   obj.str[i] = counter;
//     }
//   }
//   // console.log(`${str[i]} ${counter}`);
// }
