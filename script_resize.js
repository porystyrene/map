//NEED TO TEST

function resize() {
if (typeof resize_width !== "number") {
resize_width = 0;
resize_height = 0;
};

var resize_actualWidth = window.innerWidth;
var resize_actualHeight = window.innerHeight;

if (!(resize_width == resize_actualWidth && resize_height == resize_actualHeight)) {
document.getElementById("_body").style = "width: " + resize_actualWidth + "px; height: " + resize_actualHeight + "px; background-color: black;";
document.getElementById("_canvas").style = "width: " + resize_actualWidth + "px; height: " + resize_actualHeight + "px;";
resize_width = resize_actualWidth;
resize_height = resize_actualHeight;
};
}