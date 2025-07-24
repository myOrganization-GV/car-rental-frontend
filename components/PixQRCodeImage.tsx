interface PixQRCodeImageProps {
  base64: string;
  alt?: string;
}

const PixQRCodeImage = ({ base64, alt = "PIX QR Code" }: PixQRCodeImageProps) => {
  if (!base64) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={`data:image/png;base64,${base64}`}
        alt={alt}
        className="w-40 h-40 object-contain border border-gray-300 rounded-md shadow-sm"
      />
      <span className="text-sm text-gray-600">{alt}</span>
    </div>
  );
};

export default PixQRCodeImage;
