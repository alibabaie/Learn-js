//var today=new Date().getDay();

var today=20;

var day;

switch(today)
{
    case 0:
           day="sunday";
           break;
   case 1:
            day="monday";
            break;
    case 2:
            day="tuesday";
            break; 
    case 3:
            day="wendsday";
            break; 
    case 4:
            day="thursday";
            break;
    case 5:
            day="friday";
            break;
    case 6:
           day="saturday";
            break;
            default:
            day="Your Value Not Found"    

}

console.log("Today is: "+day);

document.write("Today is: "+day);
