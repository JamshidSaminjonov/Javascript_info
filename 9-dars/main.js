// let str1 = 'webbrain';
// let str2 =  new String('w')

// console.log(str1 === 'webbr')
// console.log(str2 === 'webbr')

// console.log(str2.localeCompare(str1))// 1,0,-1 ==> 1 => 1chisini ichida ikkinchisi bulsa//0 => true degani bir xil bulsa//-1 => umuman yuq  false degani

// charga access qilish usullari/ belgiga kirish tarjima

// console.log(str1[0])
// console.log(str1[-1])
// console.log(str1.charAt(2))
// console.log(str1.at(-1))

//**********************string method */
// 'webbrain';

// console.log(str.length)
// console.log(`${str}`.toUpperCase())
// console.log(`${str}`.toLowerCase())
// console.log(`${str}`.toLocaleLowerCase('tr'))//tillarga qarab
// console.log(`${str}`.toLocaleUpperCase("eng-USA"))//englizcha degani

// console.log(str.indexOf(' ',6))
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









