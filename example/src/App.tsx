import { useState } from "react";
import "./main.css";
import {
  PhotoEditorContext,
  PhotoEditorPreview,
} from "@ente-io/photo-editor-sdk";

function App() {
  const [fileURL, setFileURL] = useState("");

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <PhotoEditorContext.Provider
          value={{
            fileURL,
            sizeScale: 1,
            outputMime: "image/webp",
          }}
        >
          <PhotoEditorPreview show={true} />
        </PhotoEditorContext.Provider>
        <div
          style={{
            marginTop: "10rem",
          }}
        >
          <button
            onClick={() => {
              setFileURL("http://localhost:3000/example-photo.webp");
            }}
          >
            load
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
