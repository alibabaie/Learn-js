//Asinkronuse..................................

// setTimeout(() => {
//   console.log("coffee");
// },3000);
// console.log("toast");
// console.log("tea");


//callback function................................

// let greeting = name => console.log(`Hello ${name}`);

// //greeting("Ali");

// const userInfo=(firstName,lastName,callback) => {
//   const FullName=`${firstName} ${lastName}`;
//   callback(FullName);

// }
// userInfo("Ali",'Babaie',greeting);


//Promise.............................. Example 1

// const hasMeeting = false;

// const meeting = new Promise ((resolve,reject) => {

// if(!hasMeeting){
//   const meetingdetails = {
//     name:"Family Meeting",
//     location:"Babol",
//     time:"10:00 AM"

//   };
//   resolve(meetingdetails);
// }else{
// reject(new Error ("Meeting Canceled"));

// }
// });

// const addToCalendar = meetingdetails => {

//   const calendar = `${meetingdetails.name} is schedled at ${meetingdetails.location} on ${meetingdetails.time}`;
//   return Promise.resolve(calendar);

// };

// meeting.then(addToCalendar)
// .then((res) => console.log(res))
// .catch((rej) => console.log(rej))


//Promise.............................. Example 2

// const Promise1 = Promise.resolve("promise 1 complete");

// const Promise2 = new Promise((res,rej) => {

//   setTimeout(() => {
// res("promise 2 complete");
//   },2000);

// });

// // Promise1.then((res) => console.log(res));
// // Promise2.then((res) => console.log(res));

// Promise.all([Promise1,Promise2]).then(res => console.log(res));



//Promise.............................. Example 3


function getMessage (callBack){

setTimeout(function () {callBack("Hello callBack")
  
},2000);

}

function myFunction(message) {

  console.log(message);
  
}
getMessage(myFunction);









