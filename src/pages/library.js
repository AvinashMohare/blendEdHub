import React from "react";
import "../styles/Library.scss";
const Library = () => {
    const subjects = [
        { name: "Science", pdfUrl: `/science.pdf`, cover: "" },
        { name: "Subject 2", pdfUrl: "/path/to/subject2.pdf" },
        { name: "Subject 2", pdfUrl: "/path/to/subject2.pdf" },
        { name: "Subject 2", pdfUrl: "/path/to/subject2.pdf" },
        { name: "Subject 2", pdfUrl: "/path/to/subject2.pdf" },
    ];

    const handleDownload = (pdfUrl) => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);
        link.click();
    };

    return (
        <div className="rootLibrary">
            <ul className="ulLibrary">
                {subjects.map((subject, index) => (
                    <li key={index} className="liLibrary">
                        <div className="card">
                            <img
                                src="https://media.istockphoto.com/id/1322530406/photo/stack-of-hardcover-text-books-on-white-background-isolated-3d-illustration.jpg?s=612x612&w=0&k=20&c=8WyU1MhfeK7YOai1BZJdkH7TPxNoWAVBdCuwoix9Ock="
                                alt="Avatar"
                                className="imgBook"
                            />
                            <div className="container">
                                <p>
                                    <b>{subject.name}</b>
                                </p>
                                <div
                                    className="download"
                                    onClick={() =>
                                        handleDownload(subject.pdfUrl)
                                    }
                                >
                                    <p className="text">Download</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Library;
