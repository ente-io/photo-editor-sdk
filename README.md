# @ente-io/photo-editor-sdk

> Open-source React photo editor component that&#x27;s easily extensible.

[![NPM](https://img.shields.io/npm/v/@ente-io/photo-editor-sdk.svg)](https://www.npmjs.com/package/@ente-io/photo-editor-sdk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ente-io/photo-editor-sdk
```

## Usage

```tsx
import {
    PhotoEditorPreview,
    usePhotoColourAdjuster,
    usePhotoTransformer,
    PhotoEditorProvider,
    usePhotoEditor
} from '@ente-io/photo-editor-sdk';

function App() {
    const parentRef = useRef<HTMLDivElement | null>(null);

    const [fileURL, setFileURL] = useState<string>('/example-photo.jpg');

    return (
        <div
            className='App'
            ref={parentRef}
            style={{
                width: '100%',
                height: '20rem'
            }}
        >
            <PhotoEditorProvider
                value={{
                    parentElementRef: parentRef,
                    fileURL,
                    outputMime: 'image/jpeg'
                }}
            >
                <MyEditorComponent />
            </PhotoEditorProvider>
        </div>
    );
}

const MyEditorComponent = () => {
    const transformer = usePhotoTransformer();

    const [photoColourAdjusterValues, setPhotoColourAdjusterValues] = useState({
        brightness: 100,
        contrast: 100,
        blur: 0,
        saturation: 100,
        invert: false
    });

    usePhotoColourAdjuster({
        values: photoColourAdjusterValues
    });

    const photoEditor = usePhotoEditor();

    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <PhotoEditorPreview show={true} />
            </div>
        </>
    );
};

export default App;
```

## License

MIT © [ente-io](https://github.com/ente-io)
