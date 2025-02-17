//NEED TO TEST

function resize() {
if (typeof Function_SetCanvasAndBodySize_Width !== "number") {
Function_SetCanvasAndBodySize_Width = 0;
Function_SetCanvasAndBodySize_Height = 0;
};

var Game_WindowWidth = window.innerWidth;
var Game_WindowHeight = window.innerHeight;

if (!(Function_SetCanvasAndBodySize_Width == Game_WindowWidth && Function_SetCanvasAndBodySize_Height == Game_WindowHeight)) {
document.getElementById("__body").style = "width: " + Game_WindowWidth + "px; height: " + Game_WindowHeight + "px; background-color: black;";
document.getElementById("__canvas").style = "width: " + Game_WindowWidth + "px; height: " + Game_WindowHeight + "px;";
Function_SetCanvasAndBodySize_Width = Game_WindowWidth;
Function_SetCanvasAndBodySize_Height = Game_WindowHeight;

const Game_GoalWidth = 1000;
const Game_GoalHeight = 1000;

if ((Game_WindowWidth / Game_WindowHeight) == (Game_GoalWidth / Game_GoalHeight)) {
//same ratio
document.getElementById("__canvas").width = Game_GoalWidth;
document.getElementById("__canvas").height = Game_GoalHeight;
} else if ((Game_WindowWidth / Game_WindowHeight) > (Game_GoalWidth/Game_GoalHeight)) {
//height is smaller
document.getElementById("__canvas").width = Game_GoalWidth;
document.getElementById("__canvas").height = (Game_GoalWidth / Game_WindowWidth) * Game_WindowHeight;
} else {
//width is smaller
document.getElementById("__canvas").height = Game_GoalHeight;
document.getElementById("__canvas").width = (Game_GoalHeight / Game_WindowHeight) * Game_WindowWidth;
};

};
}
