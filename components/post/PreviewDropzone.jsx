import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  marginBottom: 8,
  marginRight: 8,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  width: 'auto',
  height: '100%',
};

const PreviewDropzone = ({ onChange }) => {
  const [files, setFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: 'image/png,image/webp,image/jpeg,image/gif',
    onDrop: (acceptedFiles) => {
      const uniqueFiles = Array.from(new Set(files.concat(acceptedFiles)));
      setFiles(uniqueFiles);
      setFilePreviews(uniqueFiles.map((file) => URL.createObjectURL(file)));
      onChange(uniqueFiles);
    },
  });

  return (
    <section className="w-full border-2 border-dashed border-gray-400 select-none p-4">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="text-center align-middle text-gray-500 cursor-pointer">
          Drop images here, or click to select
        </p>
      </div>
      <aside style={thumbsContainer}>
        {filePreviews.map((file) => (
          <div style={thumb} key={file} className="relative">
            <button
              type="button"
              className="absolute rounded-full right-0 bg-white shadow w-6 h-6 text-center text-sm"
              style={{
                top: '-0.5rem',
                right: '-0.5rem',
              }}
              onClick={() => {
                const fileIndex = filePreviews.indexOf(file);
                setFiles(files.filter((_, i) => i !== fileIndex));
                setFilePreviews(filePreviews.filter((_, i) => i !== fileIndex));
                onChange(files.filter((_, i) => i !== fileIndex));
              }}
            >
              x
            </button>
            <div style={thumbInner}>
              <img
                src={file}
                style={img}
                onLoad={() => URL.revokeObjectURL(file)}
              />
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default PreviewDropzone;
