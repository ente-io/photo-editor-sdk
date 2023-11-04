import { useContext, useEffect } from 'react';
import usePhotoEditor from './usePhotoEditor';
import applyFilters from '../lib/colours/apply';
import PhotoEditorContext from '../components/PhotoEditorContext';
import FilterValues from '../lib/interfaces/filters';

interface IProps {
    values: FilterValues;
}

const usePhotoColourAdjuster = (props: IProps) => {
    const { canvases } = usePhotoEditor();

    const { fileURL } = useContext(PhotoEditorContext);

    useEffect(() => {
        try {
            applyFilters(canvases, canvases[0], fileURL, props.values);
        } catch (e) {
            console.error(e);
        }
    }, [props.values, canvases, fileURL]);
};

export default usePhotoColourAdjuster;
