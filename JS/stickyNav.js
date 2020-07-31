const header = document.querySelector('.header');
let headerOffsetTop;

document.addEventListener('DOMContentLoaded',findHeaderOffsetTop);
document.addEventListener('scroll',checkForFixing);

function findHeaderOffsetTop(){
    headerOffsetTop = header.getBoundingClientRect().top;
}

function checkForFixing() {
    if(window.scrollY > headerOffsetTop ){
        document.body.classList.add('fixedNav');
        document.body.style.paddingTop = header.clientHeight;
    }else{
        document.body.classList.remove('fixedNav');
        document.body.style.paddingTop = 0;
    }
}