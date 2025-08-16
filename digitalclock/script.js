const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
    const now = new Date();
    let hr = now.getHours();
    let mi = now.getMinutes();
    let se = now.getSeconds();


    //24 hour to 12 hours
    let ampm = hr>=12 ?"pm":"am";
    hr = hr % 12 ;
    hr = hr=0 ? hr : 12;

    //12 hour to 24 hour 
    function hourClock(){
        const now = new Date();
        let hr = now.getHours();
        let mi = now.getMinutes();
    let se = now.getSeconds();
    sec.textContent= `${hr}:${mi}:${se}`;
    }
    hourClock();

    min.textContent= `${hr}:${mi}:${se}  ${ampm}`;
}, 1000);

