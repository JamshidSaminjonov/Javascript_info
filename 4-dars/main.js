// karra jadvali
// let sum=0;
// for(i=2; i<=9;i++){
//     console.log(`${i}lik karra jadvali`)
//     for(j=1; j<=9;j++){
//         console.log(`${i}*${j}=${i*j}`)
//     }
// }

//outer and inner labels 
// outer:for(i=2; i<=9;i++){
//     inner:console.log(`${i}lik karra jadvali`)
//     for(j=1; j<=9;j++){
//         if(i===5)break outer;// labellar
//         console.log(`${i}*${j}=${i*j}`);
//     }
// }
// vazifa ********************switch****************
// let browser=prompt();
// switch(browser){
//     case 'Edge':
//     alert('You have got the edge');
//     break;
//     case 'Yandex':
//     case 'Firefox':
//     case 'Chrome':
//     alert('okey we support this browser too');
//     break;
//     default :
//     alert('this browser is not defined :/');
// }
// *******************prime number****************
let counter=0;
for(i=2; i<=100; i++){
    for(j=2;j<=i;j++){
        
        if (i%j==0){
            counter++;
        }
    }
    if(counter==1){
        console.log('tub son:'+i)
    }
}