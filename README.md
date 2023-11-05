# @ente/photo-editor-sdk

Open-source React photo editor component that's easily extensible.

-   Leverages browser APIs for optimal performance
-   Supports live previews and high-resolution exports
-   Includes common tools like rotate, crop, filters
-   Fully customizable styles and functionality
-   Headless components for customized integration
-   Free, open-source, and MIT licensed

## Background

### Team

We're [ente](https://ente.io), a secure photo backup and sync service. Support this library by checking out one of our paid plans.

### Motivation

We developed our own photo editor for our web and desktop clients because existing editors did not meet our requirements for performance, scalability, and customizability. However, we realized many other developers likely face similar challenges in finding a suitable photo editing solution. Therefore, we decided to release our photo editing components as an SDK in order to help more developers implement powerful image manipulation tools without extensive research and development.

## Example

Check out this [blog post](https://ente.io/blog/introducing-web-desktop-photo-editor/) to see our photo editor in action.

## Install

```bash
yarn add @ente-io/photo-editor-sdk
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

### Caveats

-   Due to constraints, performing colour adjustments _after_ transforms may produce adverse effects

## License

MIT © [ente-io](https://github.com/ente-io)
