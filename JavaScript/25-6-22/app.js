
var bannersData = ["first_banner.jpg", "second_banner.jpg", "third_banner.jpg"]

var dom = document.getElementById("banners");
function bannersInit(index) {
    dom.innerHTML = `<img class="banner" src="./images/${bannersData[index]}"/>`
}
var count = 0;
setInterval(function () {
    if (bannersData.length === count) {
        count = 0
    }
    bannersInit(count++)
}, 3000)