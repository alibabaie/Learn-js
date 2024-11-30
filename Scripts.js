// var person={
//     firstName:"Ali",
//     lastName:"Babaie"
// }
// var person2=new Object();

// person2.phoneNumber=9119037444;
// person2.Age=28;
// console.log(person2);

var course={
    title:"JavaScript",
    teacher:"Mohammad Hashemi",
    level:1,
    isActive:true,
    views:0,
    updateView:function(){
        return ++course.views;
    }
}
//console.log(cours);
console.log(course.views);
course.updateView();
console.log(course.views);


