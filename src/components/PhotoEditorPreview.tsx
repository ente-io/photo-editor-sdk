import * as React from 'react'
import usePhotoEditor from '../hooks/usePhotoEditor'
import PhotoEditorOriginalCanvas from './PhotoEditorOriginalCanvas'
import PhotoEditorContext from './PhotoEditorContext'
import loadCanvases from '../lib/loadCanvases'
import { useContext, useEffect } from 'react'

interface IProps {
  show: boolean
}

const PhotoEditorPreview = (props: IProps) => {
  const { previewCanvasRef, originalSizeCanvasRef } = usePhotoEditor()

  const { fileURL, sizeScale } = useContext(PhotoEditorContext)

  useEffect(() => {
    if (!previewCanvasRef.current)
      return console.error('previewCanvasRef.current is null')
    if (!originalSizeCanvasRef.current)
      return console.error('originalSizeCanvasRef.current is null')
    loadCanvases(
      previewCanvasRef.current,
      originalSizeCanvasRef.current,
      fileURL,
      sizeScale
    )
  }, [
    fileURL,
    sizeScale,
    previewCanvasRef.current,
    originalSizeCanvasRef.current
  ])

  return (
    <React.Fragment>
      <canvas
        ref={previewCanvasRef}
        style={{
          objectFit: 'contain',
          display: !props.show ? 'none' : 'block',
          position: 'absolute'
        }}
      />
      <PhotoEditorOriginalCanvas />
    </React.Fragment>
  )
}

export default PhotoEditorPreview
