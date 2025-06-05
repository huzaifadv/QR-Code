import React, { useState } from 'react'

export default function QrCode() {

    const [qrData, setQrData] = useState("Huzaifa Developer");
    const qrImg = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;

    if (qrData === "") {
        setQrData("https://devhuzaifa.site/");
    }


    // Download function
    const downloadQrCode = async () => {
        try {
            const response = await fetch(qrImg);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'QRCode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading QR code:', error);
        }
    };

    return (
        <>
            <div className="qr sm:w-[500px] sm:h-[550px] text-center sm:p-[20px] p-[35px]">
                <h1 className="text-[#fff] font-[800] sm:text-[30px] text-[23px] mt-[15px]" >Generate your QR code</h1>
                <input className="qrInput mt-[25px]" onChange={(e) => setQrData(e.target.value)} type="text" placeholder="Enter your text or URL" />
                <img className="mx-auto my-[35px] sm:w-[280px] w-[250px] sm:h-[250px] h-[220px] border-2 border-[#fff] rounded p-4 bg-gray-100 " src={qrImg} />
                <button
                    className="downloadBtn mx-auto flex items-center justify-center gap-2"
                    onClick={downloadQrCode}
                >
                    Download
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-download-icon lucide-download"
                    >
                        <path d="M12 15V3" />
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <path d="m7 10 5 5 5-5" />
                    </svg>
                </button>


            </div>
        </>
    )
}
