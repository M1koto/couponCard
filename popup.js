window.addEventListener('DOMContentLoaded', function () {
    addClickable();
});

function addClickable() {
    elements = document.getElementsByClassName("button");
    Array.prototype.forEach.call(elements, function(element) {
        element.addEventListener("click", function() {
           replacePic(element);
        });
     });
    // for (let i = 1; i < 11; i++) {
    //     but = "button".concat(i.toString())
    //     ele = document.getElementsByClassName(but)[0]
    //     ele.addEventListener("click", function() {
    //         console.log("f");
    //         replacePic(ele);
    //     });
    // }
}

function replacePic(ele) {
    var img = new Image()
    img.className = "stamp"
    img.src = "./images/stamp.jpeg"
    ele.parentNode.replaceChild(img, ele)
    // console.log(ele.className);
    
    // ele.innerHTML = '<input type="image" class="stamp" src="./images/stamp.jpeg" />'
}