//******************BASIC OBJECT */

// let account = {
//     name:'Asadbek',
//     age:24,
//     surname:'Saminov',
//     'phone number':124,
//     2:45
// };
// let key = 'name';
// // console.log(account.key)
// // console.log(account[key])//tugridan tugri keyni qiymatini oladi//console.log(account.major)
// // console.log(account['key'])
// // console.log(...account)
// // console.log(account['name']);  bir xil qiymat qaytaradi
// // console.log(account['phone number']);
// // console.log(account.surname);
// // console.log(account[2]);
// // console.log(account.lastName);//undifined
// let names = prompt();
// console.log(account[names]);
// Object.freeze(account);// hech qanday uzgartirib bulmaydi
// account.founded='salom';
// delete account.name
// console.log(account)
// Object.seal(account)// qiymat ni faqat update qilsa buladi xalos

// const ac1 = {//buning linki boshqa 
//     name:'asad',
//     surname:'hamidov'
// }
// // const ac2 = {//buning linki boshqa
// //     name:'asad',
// //     surname:'hamidov'
// // }
// // let ac3 = ac1;// linki birxil buladi
// // ac3.value='null'
// // console.log(ac1);

// const ac4 = structuredClone(ac1);//copy qilib beradi va bu boshqa linkda buladi  , agar tenglasa  uni link bir xil bulib  malumti birida uzgarsa keyingilarida ham uzgaradi
// console.log(ac4);

// let name = 'daa';
// let surName = 'salom';

// const ac1 = {
//     name:'salom',
//     surName:'alik',
//     number:45,
//     adress:'homlet45'
// };
// for (let i in ac1){
//     console.log(ac1[`${i}`])
// }
// console.log(ac1)
// console.log('name' in ac1)

// let ac2 = {}

// Object.assign(ac2,ac1)// malumotni biriktirish tenglab qoyish bilan bir xil
// console.log(ac2);
// const age= {
//     time:20,
//     age:{
//         time:5,
//         age:{
//             time:50
//         }
//     }
// }
// console.log(age?.age?.age?.time);