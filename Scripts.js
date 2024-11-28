var thisMonth=new Date().getMonth();

//var today=20;

var Month;

switch(thisMonth)
{
    case 0:
           Month="January";
           break;
   case 1:
            Month="February";
            break;
    case 2:
            Month="March";
            break; 
    case 3:
            Month="April";
            break; 
    case 4:
            Month="May";
            break;
    case 5:
            Month="June";
            break;
    case 6:
            Month="July";
            break;

    case 7:
            Month="August";
            break; 
    case 8:
            Month="September";
            break;
    case 9:
            Month="October";
            break;
    case 10:
            Month="November";
            break;
    case 11:
            Month="December";
            break;
            default:
            Month="Your Value Not Found"




}

console.log("This Month is: "+Month);

document.write("This Month is: "+Month);
