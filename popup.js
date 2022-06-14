
window.addEventListener('DOMContentLoaded', function () {
    // document.getElementsByClassName("card-title").title = "fuck"
    // // title.addEventListener("click", function() {
    // //     title.title = "fuck"
    // // })

    if (localStorage.getItem("first") == null) {
        localStorage.clear()
        s = "button"
        for (let i=0; i<10; i++) {
            temp = s + i.toString();
            localStorage.setItem(temp, false)
        }
        localStorage.setItem("first", false);
    } else {
        elements = document.getElementsByClassName("button");
        Array.prototype.forEach.call(elements, function(element) {
            val = localStorage.getItem(element.className.substring(7))
            if (val == "true") { // yes stamp
                initWithPic(element)
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

function initWithPic(ele) {
    var img = new Image()
    img.src = "./images/stamp.png"
    img.className = ele.className;
    img.addEventListener("click", function() {
        localStorage.setItem(ele.className.substring(7), false)
        cancelPic(img.className);
    });
    ele.parentNode.replaceChild(img, ele);
}

function replaceWithPic(ele) {
    var img = new Image()
    img.src = "./images/stamp.png"
    img.className = ele.className;
    img.className += " stamp"
    img.addEventListener("click", function() {
        localStorage.setItem(ele.className.substring(7), false)
        cancelPic(img.className);
    });
    ele.parentNode.replaceChild(img, ele);
}

function cancelPic(stampName) {
    stamp = document.getElementsByClassName(stampName.substring(7))[0];
    btn = document.createElement("button");
    btn.className = stampName.substring(0, 10);
    addClickable(btn);
    stamp.parentNode.replaceChild(btn, stamp);
}