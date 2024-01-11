const box = document.getElementsByClassName('box')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let degree = 0

// prev.addEventListener('click',()=>{
//     degree -= 60
//     box[0].style.transform = `rotateY(${degree}deg)`
// })


// next.addEventListener('click',()=>{
//     degree += 60
//     box[0].style.transform = `rotateY(${degree}deg)`
// })

let startingPoint = window.innerWidth/2;
let touchStartPoint, touchEndPoint;

box[0].addEventListener("touchstart",(event)=>{
    // console.log("touched start");
    // console.log(event.);
    touchStartPoint = event.touches[0].clientX;
})

box[0].addEventListener("touchend",(event)=>{
    // console.log("touched end");
    touchEndPoint = event.changedTouches[0].clientX;
    const movedX = touchEndPoint - touchStartPoint;
    const percentageChange = Math.abs(movedX)/ startingPoint;
    const getDegree = 360 * percentageChange;
    if(movedX >0){
        //Move Forward
        degree += getDegree
    }
    else{
        //Move Backward
        degree -= getDegree
    }
    box[0].style.transform = `rotateY(${degree}deg)`
})