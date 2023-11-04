import FilterValues from '../interfaces/filters';

const applyFilters = async (
    canvases: (HTMLCanvasElement | null)[],
    previewCanvas: HTMLCanvasElement | null,
    originalFileURL: string,
    values: FilterValues
) => {
    try {
        for (const canvas of canvases) {
            if (!canvas) continue;
            if (!previewCanvas) return;
            const blurSizeRatio =
                Math.min(canvas.width, canvas.height) /
                Math.min(previewCanvas.width, previewCanvas.height);
            const blurRadius = blurSizeRatio * values.blur;
            const filterString = `brightness(${values.brightness}%) contrast(${
                values.contrast
            }%) blur(${blurRadius}px) saturate(${values.saturation}%) invert(${
                values.invert ? 1 : 0
            })`;
            const context = canvas.getContext('2d');

            if (!context) continue;

            context.imageSmoothingEnabled = false;

            context.filter = filterString;

            const image = new Image();
            image.src = originalFileURL;

            await new Promise((resolve, reject) => {
                image.onload = () => {
                    try {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        context.save();
                        context.drawImage(
                            image,
                            0,
                            0,
                            canvas.width,
                            canvas.height
                        );
                        context.restore();
                        resolve(true);
                    } catch (e) {
                        reject(e);
                    }
                };
            });
        }
    } catch (e) {
        throw e;
    }
};

export default applyFilters;
