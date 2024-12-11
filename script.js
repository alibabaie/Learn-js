
//Syncronus   &   Asyncronus ........................

// async function MyFunction (){

// return "Hello World";
 
// }

// console.log(MyFunction());


//Promise.............................. Example 1

//  const hasMeeting = false;

//  const meeting = new Promise ((resolve,reject) => {

//  if(!hasMeeting){
//    const meetingdetails = {
//      name:"Family Meeting",
//      location:"Babol",
//      time:"10:00 AM"

//    };
//    resolve(meetingdetails);
//  }else{
//  reject(new Error ("Meeting Canceled"));

//  }
//  });

//  const addToCalendar = meetingdetails => {

//    const calendar = `${meetingdetails.name} is schedled at ${meetingdetails.location} on ${meetingdetails.time}`;
//    return Promise.resolve(calendar);

//  };

// meeting.then(addToCalendar)
// .then((res) => console.log(res))
// .catch((rej) => console.log(rej))

// async function myMeeting() {
//   const meetingDetails = await meeting ;
//   const message = await addToCalendar(meetingDetails);

//   console.log(message);
  
// }

// myMeeting();



//Promise.............................. Example 2


const firstFunction = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      console.log("First Function Executed");
      resolve("Resolved After 3 Sec");
    },3000);
  
  
  
  });
};

async function Secondfunction (){

console.log("Calling FirstFunction");
const firstFunctionResult = await firstFunction ();
console.log(firstFunctionResult);

}

Secondfunction ();
console.log("End");






