import React from 'react'

function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'files/ArpitYadav-Resume.pdf';
        link.download = 'ArpitYadav-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button  className="bg-white/10 hover:border border-white/15 mt-12 py-2 px-4 rounded-full" onClick={handleDownload}>
            Download Resume
        </button>
    )
}

export default Resume
