const theTimer=document.querySelector(".timer");
const testArea=document.querySelector("#test-area");

var timer=[0,0,0,0];

var timerRuning=false;

function leadinZero(time){

    if(time<=9){
        time="0"+time;
    }
    return time;

}

function runTimer(){

 let currentTime=leadinZero(timer[0])+":"+leadinZero(timer[1])+":"+leadinZero(timer[2]);
 
 theTimer.innerHTML=currentTime;

 timer[3]++;

 timer[0]=Math.floor((timer[3]/100)/60);

 timer[1]=Math.floor((timer[3]/100))-(timer[0]*60);

 timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
    
}

function Start(){

    let textEnteredLength=testArea.value.length;

    if(textEnteredLength==0 && !timerRuning)
    {
        timerRuning=true;
        setInterval(runTimer,10);
    }
}

testArea.addEventListener("keypress",Start);
