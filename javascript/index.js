
function actualSize() {
    let ancho = screen.width;
    let pic;

    if (ancho >= 769) {
        pic = './assets/images/image-web-3-desktop.jpg'
    } else {
        pic = './assets/images/image-web-3-mobile.jpg'
    }

    return document.getElementById('main-pic').src = pic;
}

