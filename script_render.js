function render() {
    const canvas = document.getElementById("_canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "image.png";
    ctx.drawImage(img,
        _camx + canvas.width/2 - _imageWidth/2 * _camScale,
        _camy + canvas.height/2 - _imageHeight/2 * _camScale,
        _imageWidth * _camScale,
        _imageHeight * _camScale
    );
}