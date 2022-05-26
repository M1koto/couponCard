window.addEventListener('DOMContentLoaded', function () {
    elements = document.getElementsByClassName("button");
    Array.prototype.forEach.call(elements, function(element) {
        addClickable(element);
     });
});

function addClickable(element) {
    element.addEventListener("click", function() {
        replacePic(element);
     });
}

function replacePic(ele) {
    var img = new Image()
    img.src = "./images/stamp.jpeg"
    img.className = ele.className;
    img.addEventListener("click", function() {
        cancelPic(img.className);
    });
    ele.parentNode.replaceChild(img, ele);
}

function cancelPic(stampName) {
    stamp = document.getElementsByClassName(stampName.substring(6))[0];
    btn = document.createElement("button");
    btn.className = stampName;
    addClickable(btn);
    stamp.parentNode.replaceChild(btn, stamp);
}