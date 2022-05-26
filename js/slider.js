let sliderMain = document.getElementById('slider-main');
let item = sliderMain.getElementsByClassName('offers__item');

function next() {
    sliderMain.append(item[0]);
}

function prev() {
    sliderMain.prepend(item[item.length - 1]);
}