//console.log(fetch('sample.txt'));

const myBtn = document.getElementById("getText");

// function getText() {

//   fetch('sample.txt').then(

//     function (res) {

//       //console.log(res);
//       return res.text();

//     }).then(
//       function (data) {
//         console.log(data);

//       }

//     );

// }

//Arrow Function......................................

function getText() {

  fetch('sample.txt')
  .then((res => res.text()))
  .then((data) => console.log(data))
  

}



myBtn.addEventListener('click', getText);