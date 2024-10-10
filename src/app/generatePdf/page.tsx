'use client';

export default function CreatePdf() {
    const generatePdf = async () => {
        const res = await fetch('/api/generatePdf');
        if (!res.ok) {
            console.error('Failed to fetch PDF');
            return;
        }
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'generated.pdf';
        link.click();
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="font-bold pb-2">Create PDF demo, click the link below</h1>
            <button className="rounded p-2 border hover:border-gray-500" onClick={generatePdf}>Download PDF</button>
        </div>
    );
}