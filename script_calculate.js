function calculate() {
}

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