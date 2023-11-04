import { useContext, useRef } from 'react';
import PhotoEditorContext from '../components/PhotoEditorContext';
import exportCanvasToBlob from '../lib/exportCanvas';
import loadCanvases from '../lib/loadCanvases';

const usePhotoEditor = () => {
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const originalSizeCanvasRef = useRef<HTMLCanvasElement>(null);

    const canvases = [previewCanvasRef.current, originalSizeCanvasRef.current];

    const { outputMime, fileURL, sizeScale } = useContext(PhotoEditorContext);

    const exportPhoto = async (): Promise<Blob | null> => {
        if (!originalSizeCanvasRef.current) return null;
        return await exportCanvasToBlob(
            originalSizeCanvasRef.current,
            outputMime
        );
    };

    const reset = () => {
        if (!previewCanvasRef.current) return;
        if (!originalSizeCanvasRef.current) return;

        loadCanvases(
            previewCanvasRef.current,
            originalSizeCanvasRef.current,
            fileURL,
            sizeScale
        );
    };

    return {
        previewCanvasRef,
        originalSizeCanvasRef,
        canvases,
        exportPhoto,
        reset,
    };
};

export default usePhotoEditor;
