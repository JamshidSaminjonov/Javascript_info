///////////////////Moment js /////////////////
let data = {
  MMMM: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dddd: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  Do: [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
  ],
};

let currentTime = data.Do[new Date().getDay()];
// console.log(currentTime);
let symbol = " ";
let symbol2 = ":";
let ampm = new Date().getHours >= 12 ? "pm" : "am";
let addsecond =
  new Date().getSeconds() < 10
    ? "0" + new Date().getSeconds()
    : new Date().getSeconds();
// console.log(addsecond);
const moment = () => {
  return {
    format(key) {
      switch (key) {
        case "MMMM Do YYYY, h:mm:ss a":
          console.log(
            `${data.MMMM[new Date().getMonth()]}${symbol}${
              data.Do[new Date().getDate() - 1]
            }${symbol}${new Date().getFullYear()},${new Date().getHours()}${symbol2}${new Date().getMinutes()}${symbol2}${addsecond} ${ampm}`
          );
        case "dddd":
          console.log(data.dddd[new Date().getDay()]);
        case "MMM Do YY":
          console.log(
            `${data.MMMM[new Date().getMonth()].slice(0, 3)}${symbol}${
              data.Do[new Date().getDate() - 1]
            }${symbol}${new Date().getFullYear() % 100}`
          );
      }
    },
  };
};
moment().format("MMM Do YY");
moment.locale(); // en
moment().format("LT"); // 12:18 PM
moment().format("LTS"); // 12:18:34 PM
moment().format("L"); // 09/20/2023
moment().format("l"); // 9/20/2023
moment().format("LL"); // September 20, 2023
moment().format("ll"); // Sep 20, 2023
moment().format("LLL"); // September 20, 2023 12:18 PM
moment().format("lll"); // Sep 20, 2023 12:18 PM
moment().format("LLLL"); // Wednesday, September 20, 2023 12:18 PM
moment().format("llll");
