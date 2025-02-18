function render() {
    const canvas = document.getElementById("_canvas");
    const ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "image.png";
    ctx.drawImage(img,
        _camx + canvas.width/2 - _imageWidth/2 * _camScale,
        _camy + canvas.height/2 - _imageHeight/2 * _camScale,
        _imageWidth * _camScale,
        _imageHeight * _camScale
    );
    img = new Image();
    img.src = "B.png";
    ctx.drawImage(img,
        _camx + canvas.width/2 + _secondX * _camScale,
        _camy + canvas.height/2 + _secondY * _camScale,
        100,
        100
    );
    img = new Image();
    img.src = "A.png";
    ctx.drawImage(img,
        _camx + canvas.width/2 + _firstX * _camScale,
        _camy + canvas.height/2 + _firstY * _camScale,
        100,
        100
    );
    ctx.font = "30px sans-serif";
    ctx.fillText(_imagePixelToCentimeter * Math.sqrt((_firstX-_secondX)**2+(_firstY-_secondY)**2) + "cm", 10, 40);
    ctx.fillText(Math.sqrt((_firstX-_secondX)**2+(_firstY-_secondY)**2) + " pixels", 10, 80);
}