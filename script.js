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


//Promise..............................

const hasMeeting = false;

const meeting = new Promise ((resolve,reject) => {

if(!hasMeeting){
  const meetingdetails = {
    name:"Family Meeting",
    location:"Babol",
    time:"10:00 AM"

  };
  resolve(meetingdetails);
}else{
reject(new Error ("Meeting Canceled"));

}

});

meeting
.then((res) => console.log(res))
.catch((rej) => console.log(rej))





