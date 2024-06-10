import React, { useEffect, useState } from "react";
import "./multipleFileUploader.css";
import { Toaster, toast } from "sonner";

const MultipleFileUploader = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<"initial" | "uploading" | "success" | "fail">("initial");
  const ref = React.useRef();
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setStatus("initial");
      setFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (files) {
      setStatus("uploading");

      const formData = new FormData();

      [...files].forEach((file) => {
        formData.append("files", file);
      });
      console.dir(formData.getAll("files"));

      try {
        const result = await fetch(`${import.meta.env.VITE_API_URL}/images`, {
          method: "POST",
          body: formData,
        });
        console.log(result);
        const data = await result.json();
        if (data.error) {
          console.error(data.error);
          throw new Error(data.error);
        }

        console.log(data);
        setStatus("success");
        toast.success("Files uploaded successfully!");
        if (ref.current) {
          // @ts-expect-error - ignore
          ref.current.value = "";
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        }
        setStatus("fail");
      }
    }
  };

  useEffect(() => {
    if (status === "success") {
      //   setTimeout(() => {
      setStatus("initial");
      setFiles(null);
      //   }, 3000);
    }
  }, [status]);

  const handleRemoveFile = (file: File) => {
    setFiles((prev) => {
      const newFiles = new DataTransfer();
      for (let i = 0; i < prev!.length; i++) {
        if (prev![i] !== file) {
          newFiles.items.add(prev![i]);
        }
      }
      setStatus("initial");
      if (newFiles.files.length === 0) {
        if (ref.current) {
          // @ts-expect-error - ignore
          ref.current.value = "";
        }
        return null;
      }
      return newFiles.files;
    });
  };

  return (
    <div className="file-upload-wrapper">
      <div className="input-group">
        <label htmlFor="file" className="sr-only">
          Upload files
        </label>
        {/* @ts-expect-error -ignore*/}
        <input id="file" type="file" ref={ref} multiple onChange={handleFileChange} />
      </div>
      {files &&
        [...files].map((file, index) => (
          <div key={file.name} className="file-details">
            <span>File {index + 1} details:</span>
            <ul>
              <li>Name: {file.name}</li>
              <li>Type: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
            <img src={URL.createObjectURL(file)} alt={file.name} />

            <button className="remove" disabled={status === "uploading"} onClick={() => handleRemoveFile(file)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d06c41"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        ))}
      {files && (
        <div className="upload-button-wrapper">
          <button onClick={handleUpload} className="submit" disabled={status !== "initial"}>
            {status === "initial"
              ? `Upload ${files.length > 1 ? "files" : "a file"}`
              : status === "uploading"
              ? "Uploading..."
              : status === "success"
              ? "Upload"
              : "Upload"}
          </button>
        </div>
      )}

      <div className="upload-status">
        <Toaster position="top-center" style={{ color: "#d06c41" }} />
        <Result status={status} error={error} />
      </div>
    </div>
  );
};

const Result = ({ status, error }: { status: string; error?: string }) => {
  if (status === "success") {
    return <p>✅ Uploaded successfully!</p>;
  } else if (status === "fail") {
    return <p>❌ Upload failed! {error}</p>;
  } else if (status === "uploading") {
    return <p>⏳ Uploading started...</p>;
  } else {
    return null;
  }
};

export default MultipleFileUploader;
