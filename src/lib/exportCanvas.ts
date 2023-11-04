const exportCanvasToBlob = (
    canvas: HTMLCanvasElement,
    mime: string
): Promise<Blob | null> | null => {
    try {
        const image = new Image();
        image.src = canvas.toDataURL();

        const context = canvas.getContext('2d');
        if (!context) return null;
        return new Promise((resolve) => {
            canvas.toBlob(resolve, mime);
        });
    } catch (e) {
        throw e;
    }
};

export default exportCanvasToBlob;
