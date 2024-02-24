import React from "react";
import "../styles/Library.scss";
const Library = () => {
    const subjects = [
        {
            name: "Physics",
            pdfUrl: `/science.pdf`,
            cover: "https://cdn.discordapp.com/attachments/1183758222847389791/1186865234321870998/91u5XFlMazL.png?ex=6594cd62&is=65825862&hm=9748b21e317d01e888c962ec7b5889124cef52f3b3226fe49f31b3a6df39138c&",
        },
        {
            name: "Chemistry",
            pdfUrl: `/science.pdf`,
            cover: "https://ncert.nic.in/textbook/pdf/lech1cc.jpg",
        },
        {
            name: "Sanskrit",
            pdfUrl: `/science.pdf`,
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGo4KVOQ5SkshKMD5DgkC4IkgpLgOStvW9qA&usqp=CAU",
        },
        {
            name: "Hindi",
            pdfUrl: `/science.pdf`,
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCQ9o_qB38rI5ES9ww6E1bzRdEj2G1AkzeA&usqp=CAU",
        },
        {
            name: "English",
            pdfUrl: `/science.pdf`,
            cover: "https://ncert.nic.in/textbook/pdf/jeff1cc.jpg",
        },
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
                                src={subject.cover}
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
