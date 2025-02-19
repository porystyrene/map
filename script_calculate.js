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

document.addEventListener('keydown', function(event) {
    if (event.key == "p") {
        _pPressed = 1;
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key == "p") {
        _pPressed = 0;
    }
});

function calculate() {
    const canvas = document.getElementById("_canvas");
    if (_zPressed == 1) {
        _listX.push((_lastX-canvas.width/2) / _camScale - _camx / _camScale);
        _listY.push((_lastY-canvas.height/2) / _camScale - _camy / _camScale);
        _zPressed = 2;
    }
    if (_pPressed == 1) {
        _pPressed = 2;
        //delete nearest line
        //copied from render()
        let biggest = [];
        for (let i = 0; i < _listX.length; i+=2) {
            //skip
            if (_listX.length < i+2) {
                break;
            }
            let mouseX = (_lastX - canvas.width/2) / _camScale - _camx / _camScale;
            let mouseY = (_lastY - canvas.height/2) / _camScale - _camy / _camScale;
            let dist = Math.sqrt((_listX[i]-_listX[i+1])**2 + (_listY[i]-_listY[i+1])**2);
            let dot =
            (
                (mouseX-_listX[i])*(_listX[i+1]-_listX[i])
                +
                (mouseY-_listY[i])*(_listY[i+1]-_listY[i])
            )
            /
            dist**2;
            let closeX = _listX[i] + (dot * (_listX[i+1]-_listX[i]));
            let closeY = _listY[i] + (dot * (_listY[i+1]-_listY[i]));
            let dist1 = Math.sqrt((closeX-_listX[i])**2 + (closeY-_listY[i])**2);
            let dist2 = Math.sqrt((closeX-_listX[i+1])**2 + (closeY-_listY[i+1])**2);

            //is it on the line
            if (dist1 + dist2 < dist + 0.1) {
                //on the line
            } else if (dist1 < dist2) {
                //nearer to first point
                closeX = _listX[i];
                closeY = _listY[i];
            } else {
                //nearer to second point
                closeX = _listX[i+1];
                closeY = _listY[i+1];
            }

            dist1 = Math.sqrt((mouseX-_listX[i])**2 + (mouseY-_listY[i])**2);
            dist2 = Math.sqrt((mouseX-_listX[i+1])**2 + (mouseY-_listY[i+1])**2);

            //final dist from mouse
            let final = Math.sqrt((closeX-mouseX)**2 + (closeY-mouseY)**2);
            //skip verdict
            if (biggest.length == 0) {
                biggest = [i, final];
                continue;
            }

            //verdict
            if (final < biggest[1]) {
                biggest = [i, final];
            }
        }
        _listX.splice(biggest[0], 2);
        _listY.splice(biggest[0], 2);
    }
}