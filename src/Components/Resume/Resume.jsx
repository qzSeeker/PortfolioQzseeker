function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'files/Arpit_Yadav_Frontend_Resume.pdf';
        link.download = 'Arpit_Yadav_Frontend_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button  className="flex items-center gap-2 border cursor-pointer border-white/15 px-5 py-3 rounded-full hover:bg-white/10 transition" onClick={handleDownload}>
            Download CV
        </button>
    )
}

export default Resume
