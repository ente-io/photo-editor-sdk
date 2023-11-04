const loadCanvases = async (
    previewCanvas: HTMLCanvasElement,
    originalSizeCanvas: HTMLCanvasElement,
    fileURL: string,
    scale: number | undefined = 1
) => {
    const ctx = previewCanvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const img = new Image();
    img.src = fileURL;

    await new Promise((resolve, reject) => {
        img.onload = () => {
            try {
                const width = img.width * scale;
                const height = img.height * scale;
                previewCanvas.width = width;
                previewCanvas.height = height;

                ctx?.drawImage(img, 0, 0, width, height);

                originalSizeCanvas.width = img.width;
                originalSizeCanvas.height = img.height;

                const oSCtx = originalSizeCanvas.getContext('2d');

                oSCtx?.drawImage(img, 0, 0, img.width, img.height);

                resolve(true);
            } catch (e) {
                reject(e);
            }
        };
        img.onerror = (e) => {
            reject(e);
        };
    });
};

export default loadCanvases;
