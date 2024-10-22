let draggable = false;
let offSetX, offSetY;

function startDrag(event) {
    draggable = true;
    const img = event.target;

    offSetX = event.pageX - img.offsetLeft;
    offSetY = event.pageY - img.offsetTop;

    document.onpointermove = moveElement;
    document.onpointerup = stopDrag;

    event.preventDefault();
}

function moveElement(event) {
    if(draggable) {
        const img = document.getElementById("draggableImage");
        img.style.left = (event.pageX - offSetX) + 'px';
        img.style.top = (event.pageY - offSetY) + 'px';
    }
}

function stopDrag(event) {
    draggable = false;

    // Remove the event listeners when dragging stops
    document.onpointermove = null;
    document.onpointerup = null;
}

function init() {
    const img = document.getElementById("draggableImage");
    img.onpointerdown = startDrag;
}

document.addEventListener("DOMContentLoaded", init);