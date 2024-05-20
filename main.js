let svgImage = document.getElementById('svg-group');

window.onresize = function() {
    if(window.innerWidth <= 575) svgImage.classList.add('order-first');
    else svgImage.classList.remove('order-first');
}