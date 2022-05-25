window.addEventListener('DOMContentLoaded', function () {
    var img = new Image()
    img.className = "stamp"
    img.src = "./images/stamp.jpeg"
    s1 = document.getElementsByClassName('button1')[0];
    s1.parentNode.replaceChild(img, s1)
});