const stars = ()=>{
    const elem= document.createElement('div');
    elem.setAttribute('class', "star");
    
    elem.style.left = Math.random() * window.innerWidth - 40 + 'px'
    document.body.appendChild(elem)

    setTimeout(()=>{
        document.body.removeChild(elem)
    }, 5000)
}

setInterval( ()=>{
    stars()    
}, 100)