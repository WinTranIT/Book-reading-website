import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../Firebase/firebaseConfig';

function UploadFile() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) return;

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.error("Upload failed:", error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setDownloadURL(downloadURL);
                    console.log('File available at', downloadURL);
                });
            }
        );
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button className='bg-amber-600' onClick={handleUpload}>Upload</button>
            <p>Progress: {Math.round(progress)}%</p>
            {downloadURL && <a href={downloadURL}>Download File</a>}
        </div>
    );
}

export default UploadFile;
