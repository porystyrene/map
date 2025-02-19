document.addEventListener('mousedown', function (event) {
    _mouseDown = true;
});
document.addEventListener('mouseup', function (event) {
    _mouseDown = false;
});
document.addEventListener('mousemove', function (event) {
    if (_mouseDown) {
        _camx+= event.clientX - _lastX;
        _camy+= event.clientY - _lastY;
    }
    _lastX = event.clientX;
    _lastY = event.clientY;
});
document.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        _camScale = _camScale / 1.1;
        _camx = _camx / 1.1;
        _camy = _camy / 1.1;
    } else {
        _camScale = _camScale * 1.1;
        _camx = _camx * 1.1;
        _camy = _camy * 1.1;
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key == "z") {
        _zPressed = 1;
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key == "z") {
        _zPressed = 0;
    }
});

/*
document.addEventListener('keydown', function(event) {
    if (event.key == "x") {
        _xPressed = 1;
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key == "x") {
        _xPressed = 0;
    }
});
*/

function calculate() {
    const canvas = document.getElementById("_canvas");
    if (_zPressed == 1) {
        _listX.push((_lastX-canvas.width/2) / _camScale - _camx / _camScale);
        _listY.push((_lastY-canvas.height/2) / _camScale - _camy / _camScale);
        _zPressed = 2;
    }
}