import cropCanvas from '../lib/transform/cropCanvas';
import rotateCanvas from '../lib/transform/rotateCanvas';
import flipCanvas from '../lib/transform/flipCanvas';
import usePhotoEditor from './usePhotoEditor';

const usePhotoTransformer = () => {
    const { canvases } = usePhotoEditor();

    const cropPhoto = (widthRatio: number, heightRatio: number) => {
        canvases.forEach((canvas) => {
            if (!canvas) return;
            cropCanvas(canvas, widthRatio, heightRatio);
        });
    };

    const rotatePhoto = (angle: number) => {
        canvases.forEach((canvas) => {
            if (!canvas) return;
            rotateCanvas(canvas, angle);
        });
    };

    const flipPhoto = (direction: 'vertical' | 'horizontal') => {
        canvases.forEach((canvas) => {
            if (!canvas) return;
            flipCanvas(canvas, direction);
        });
    };

    return {
        cropPhoto,
        rotatePhoto,
        flipPhoto,
    };
};

export default usePhotoTransformer;
