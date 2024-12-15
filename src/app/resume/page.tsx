"use client";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center h-screen p-4">
      
        <iframe
          src="/Resume.pdf#toolbar=0"
          className="w-full h-full border-2 border-gray-300 rounded"
          title="Resume"
        ></iframe>
      </div>
    
  );
}
