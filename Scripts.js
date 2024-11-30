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
// console.log(course.views);
// course.updateView();
// console.log(course.views);

function Course(title,teacher,level,isActive,views,updateView) {
    
    this.title=title,
    this.teacher=teacher,
    this.level=level,
    this.isActive=isActive,
    this.views=views,
    this.updateView=function() {
        return ++this.views;
    }
}


var course1=new Course("JavaScript","Mohammad Hashemi",1,true,0);
var course2=new Course("Materialize","qasem Bassaki",2,true,100);
var course3=new Course("Html Css","Milad Dehyami",2,true,200);

console.log(course1.title);
console.log(course2.teacher);
console.log(course3);



