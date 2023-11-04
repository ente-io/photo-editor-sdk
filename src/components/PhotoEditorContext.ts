import { createContext } from 'react';

interface PhotoEditorContextValues {
    fileURL: string;
    outputMime: string;
    sizeScale: number;
}

const PhotoEditorContext = createContext({} as PhotoEditorContextValues);

export default PhotoEditorContext;
