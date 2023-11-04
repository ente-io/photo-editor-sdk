import * as React from 'react';
import usePhotoEditor from '../hooks/usePhotoEditor';

const PhotoEditorOriginalCanvas = () => {
    const { originalSizeCanvasRef } = usePhotoEditor();

    return (
        <canvas
            ref={originalSizeCanvasRef}
            style={{
                display: 'none',
            }}
        />
    );
};

export default PhotoEditorOriginalCanvas;
