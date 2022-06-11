
window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem("first") == null) {
        localStorage.clear()
        s = "button"
        for (let i=1; i<11; i++) {
            temp = s + i.toString();
            localStorage.setItem(temp, false)
        }
        localStorage.setItem("first", false);
    } else {
        elements = document.getElementsByClassName("button");
        Array.prototype.forEach.call(elements, function(element) {
            val = localStorage.getItem(element.className.substring(7))
            if (val == "true") { // yes stamp
                replaceWithPic(element)
            } else {
                addClickable(element)
            }
        });
    }
});

function addClickable(element) {
    element.addEventListener("click", function() {
        localStorage.setItem(element.className.substring(7), true)
        replaceWithPic(element);
     });
}

function replaceWithPic(ele) {
    var img = new Image()
    img.src = "./images/stamp.jpeg"
    img.className = ele.className;
    img.addEventListener("click", function() {
        localStorage.setItem(ele.className.substring(7), false)
        cancelPic(img.className);
    });
    ele.parentNode.replaceChild(img, ele);
}

function cancelPic(stampName) {
    stamp = document.getElementsByClassName(stampName.substring(7))[0];
    btn = document.createElement("button");
    btn.className = stampName;
    addClickable(btn);
    stamp.parentNode.replaceChild(btn, stamp);
}