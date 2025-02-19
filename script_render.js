function render() {
    const canvas = document.getElementById("_canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.font = "30px sans-serif";
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';

    let img2 = new Image();
    //render map
    img2.src = "image.png";
    ctx.drawImage(img2,
        _camx + canvas.width/2 - _imageWidth/2 * _camScale,
        _camy + canvas.height/2 - _imageHeight/2 * _camScale,
        _imageWidth * _camScale,
        _imageHeight * _camScale
    );

    let img = new Image();
    //render points
    img.src = "point.png";
    for (let i = 0; i < _listX.length; i++) {
        ctx.drawImage(img,
            _camx + canvas.width/2 + _listX[i] * _camScale,
            _camy + canvas.height/2 + _listY[i] * _camScale,
            100,
            100
        );
        ctx.strokeText(i+1, _camx + canvas.width/2 + _listX[i] * _camScale, _camy + canvas.height/2 + _listY[i] * _camScale);
        ctx.fillText(i+1, _camx + canvas.width/2 + _listX[i] * _camScale, _camy + canvas.height/2 + _listY[i] * _camScale);
    }

    //calculate nearest line and render info
    let biggest = [];
    for (let i = 0; i < _listX.length; i+=2) {
        //skip
        if (_listX.length < i+2) {
            break;
        }
        //i stole code lol
        //https://www.jeffreythompson.org/collision-detection/line-circle.php
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
            biggest = [dist, final];
            continue;
        }

        //verdict
        if (final < biggest[1]) {
            biggest = [dist, final];
        }
    }
    if (_listX.length > 1) {
        ctx.strokeText(_imagePixelToCentimeter * biggest[0] + "cm", 10, 40);
        ctx.fillText(_imagePixelToCentimeter * biggest[0] + "cm", 10, 40);
        ctx.strokeText(biggest[0] + " pixels", 10, 80);
        ctx.fillText(biggest[0] + " pixels", 10, 80);
    }
}