let obj = {
  age: 145,
  name: "sunnat",
  surName: "lazizov",
  "phone number": 123456789,
  online: true,
  ofline: false,

  child: {
    age: 45,
    surName: "lazizov",
    "phone number": 123456789,
    online: true,

    child: {
      age: 25,
      surName: "lazizov",
      "phone number": 123456789,
      online: true,
      child: {
        age: 25,
        surName: "lazizov",
        "phone number": 123456789,
        online: true,
      },
    },
  },
};
do{
    if(obj.child){
        console.log(obj.age)
    }else break;
    obj = obj.child;
}while(1)