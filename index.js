//set current time
const getActualTime = () => {
    const now = new Date();
    sec = now.getSeconds();
    min = now.getMinutes();
    h = now.getHours() % 12;
};
const watch = document.querySelector(".watch");
function* incSec(){
    while(true)
        yield sec++;
};
function* incMin(){
    while(true)
        yield min++;
};
function* incHour(){
    while(true)
        yield h++;
};
getActualTime();
const genSec = incSec();
const genMin = incMin();
const genHour = incHour();
const start = setInterval(() => {
    genSec.next().value;
    if (sec===60){
        sec=0;
        
        genMin.next().value;
        if(min===60){
            min=0;
            genHour.next().value;
            if(h===12)
                h=0; }} 
                watch.textContent = `${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
            }, 1000)
                     