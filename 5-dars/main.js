
// let age =45;

// const test =()=>{
//     age=30
//     console.log(`age:${age}`)
// }
// console.log(age)//age=45
// test();// age =30


// let age =45;

// const test =()=>{
//     age=30
//     console.log(`age:${age}`)
// }
// test();// age =30
// console.log(age)//age=30  yani age shadow  qilib orqada qolib ketadi

// const telegram =(name, surname='')=>{
//     // if(surname)console.log(name,surname)
//     // else console.log(name) undifined qiymat qaytmaydi
//     // || va ?? (or va nalishda ham shu ishni qilish mumkin)
//     // surname??console.log(name)
//     // surname||console.log(name,surname)
//     //surname?console.log(name,surname):console.log(name)
//     console.log(name,surname)
// }
// telegram('webbrain');

// function with return and without return

// const avr = (a)=>{
//     let total = 193
//     return (a*100)/total;
// }
// console.log(parseInt(avr(183)));


// *******clean code*****
//naming function  camalCase shaklda
//return value => get(Name)
//create smth => create(Name)
//calculate smth => calc(Name)
//check smth return boolen=> check(Name)

//uyga vazifa
//1.
//minimalni topuvchi function ikkita son orasida
// const min=(a,b)=>{
//     if(a>b)return a
//     else return b;
// }
//    console.log( min(15,-85))

//2.
//powni hisoblovchi function
// const pow=(a,b)=>{
//     let calcPow = 1;
//     for(i=1; i<=b;i++){
        
//         calcPow *=a;
//     }
//     return calcPow;
// }
//  console.log(pow(3,3));


