function resize() {
    document.getElementById("_body").style = "width: " + window.innerWidth + "px; height: " + window.innerHeight + "px;";
    document.getElementById("_canvas").style = "width: " + window.innerWidth + "px; height: " + window.innerHeight + "px;";
    document.getElementById("_canvas").width = window.innerWidth;
    document.getElementById("_canvas").height = window.innerHeight;
}