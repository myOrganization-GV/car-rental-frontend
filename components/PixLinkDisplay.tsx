import { useState } from "react";
import { FiClipboard } from "react-icons/fi"; 

const PixLinkDisplay = ({ qrCode }: { qrCode: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

return (
  <div className="relative  w-full flex items-center bg-[#F6F7F9] rounded-md px-4 py-2">
    <span
      className="truncate text-black pr-20"
      title={qrCode}
    >
      {qrCode}
    </span>

    <button
      onClick={handleCopy}
      type="button"
      className="absolute cursor-pointer top-0 right-0 h-full px-3 bg-blue-600 text-white hover:bg-blue-700 rounded-r-md font-semibold flex items-center"
    >
      <FiClipboard className="mr-1" />
      {copied ? "Copied!" : "Copy"}
    </button>
  </div>
);
};

export default PixLinkDisplay;
