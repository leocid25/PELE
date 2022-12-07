var container = document.querySelector(".grid-container_1");
window.onscroll = function() {
    var altura_scroll = document.documentElement.scrollTop;
    if(altura_scroll > 70) {
        container.style.top = "10px";
    } else {
        container.style.top = "70px";
    }
}