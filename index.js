var num=0;

function controller(flag){
    num = num + flag;
    changeImage(num);
}

changeImage(num);

function changeImage(index){
    const slides=document.getElementsByClassName("slides");
    const slidesArray = Object.entries(slides);

    slidesArray.forEach(element => {
        element[1].style.display="none";
    });
    
    if(index===slidesArray.length)
    {
        index=0;
        num=0;
    }
    
    if(index<0)
    {
        num=slidesArray.length-1;
        index=slidesArray.length-1;
    }
    slides[index].style.display="block";

    //for circles
    const circles=document.getElementsByClassName("circle");
    for(let x of circles)
    {
        x.style.opacity=.5;
    }
    circles[num].style.opacity=1;
}

setInterval(controller,3000,1);

