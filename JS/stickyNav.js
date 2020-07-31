const header = document.querySelector('.header');
let headerOffsetTop;
let transitionEnded = true;

document.addEventListener('DOMContentLoaded',findHeaderOffsetTop);
document.addEventListener('scroll',checkForFixing);

function findHeaderOffsetTop(){
    headerOffsetTop = header.getBoundingClientRect().top;
}

function checkForFixing() {
    if(transitionEnded){
        performTransition();
    }
    else{
        setTimeout(performTransition,300)
    }
}

function performTransition(){
    if(window.scrollY > headerOffsetTop ){
        transitionEnded=false;
        document.body.classList.add('fixedNav');
        document.body.style.paddingTop = header.clientHeight;
    }else{
        document.body.classList.remove('fixedNav');
        document.body.style.paddingTop = 0;
    }
}

header.addEventListener('transitionend',()=>transitionEnded=true)