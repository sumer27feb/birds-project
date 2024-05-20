import { useState, useRef, useEffect } from "react";

const DragDropFiles = ({ onResult, onCancel }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
    // Set file to the first file in the list
  };

  const handleUpload = async (event) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    //const file = event.target.files[0];

    const formData = new FormData();

    // Append the file to the form data
    formData.append("file", file); // Changed "File" to "file"

    try {
      // Send a POST request to the API
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onResult(data);

      console.log(data);
    } catch (error) {
      // Log any errors
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (file)
    return (
      <div className="uploads bg-green-200 p-4 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src={preview}
          alt="Preview"
          className="mt-4 w-64 h-64 object-cover"
        />
        <p className="mt-2 text-blue-800">{file.name}</p>
        <div className="actions flex justify-center mt-4 space-x-2">
          <button
            onClick={() => {
              setFile(null);
              onCancel();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Predict
          </button>
        </div>
      </div>
    );

  return (
    <>
      <div
        className="dropzone bg-green-200 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h1 className="text-2xl text-blue-800 mb-2">
          Drag and Drop Files to Upload
        </h1>
        <h1 className="text-xl text-blue-800 mb-4">Or</h1>
        <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])} // Set file to the first file selected
          hidden
          accept="image/jpeg"
          ref={inputRef}
        />
        <button
          onClick={() => inputRef.current.click()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Select Files
        </button>
      </div>
    </>
  );
};

export default DragDropFiles;
