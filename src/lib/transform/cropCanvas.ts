const cropCanvas = (
    canvas: HTMLCanvasElement,
    widthRatio: number,
    heightRatio: number
) => {
    const context = canvas.getContext('2d');

    const aspectRatio = widthRatio / heightRatio;

    if (!context || !canvas) return;
    context.imageSmoothingEnabled = false;

    const img = new Image();
    img.src = canvas.toDataURL();
    img.onload = () => {
        const sourceWidth = img.width;
        const sourceHeight = img.height;

        let sourceX = 0;
        let sourceY = 0;

        if (sourceWidth / sourceHeight > aspectRatio) {
            sourceX = (sourceWidth - sourceHeight * aspectRatio) / 2;
        } else {
            sourceY = (sourceHeight - sourceWidth / aspectRatio) / 2;
        }

        const newWidth = sourceWidth - 2 * sourceX;
        const newHeight = sourceHeight - 2 * sourceY;

        context.clearRect(0, 0, canvas.width, canvas.height);

        canvas.width = newWidth;
        canvas.height = newHeight;

        context.drawImage(
            img,
            sourceX,
            sourceY,
            newWidth,
            newHeight,
            0,
            0,
            newWidth,
            newHeight
        );
    };
};

export default cropCanvas;
