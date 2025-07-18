export default function OptionCard({ image, label, isSelected, onClick }) {
  return (
    <div
      className={`rounded-2xl border-4 p-2 cursor-pointer transition-all duration-200 ${
        isSelected ? "border-pink-500 scale-105" : "border-transparent hover:border-pink-300"
      }`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={label}
        className="w-24 h-24 object-contain mx-auto drop-shadow"
      />
      <p className="text-center text-sm font-medium">{label}</p>
    </div>
  )
}

