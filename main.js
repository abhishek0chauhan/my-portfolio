let svgImage = document.getElementById('svg-group');

window.onresize = function() {
    if(window.innerWidth <= 990) svgImage.classList.add('order-first');
    else svgImage.classList.remove('order-first');
}