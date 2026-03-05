interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar películas.."
        className="w-full px-5 py-3 rounded-2xl border-2 border-yellow-400 
        focus:outline-none focus:border-yellow-400 bg-white text-gray-900 
        font-medium shadow-sm placeholder-gray-400"
      />
    </div>
  );
}