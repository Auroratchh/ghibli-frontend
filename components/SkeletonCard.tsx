export default function SkeletonCard() {
  return (
    <div className="bg-black rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full h-64 bg-gray-800" />
      <div className="p-4">
        <div className="h-5 bg-gray-700 rounded-full w-3/4 mb-2" />
        <div className="flex justify-between items-center mt-2">
          <div className="h-4 bg-gray-700 rounded-full w-1/4" />
          <div className="h-6 bg-gray-700 rounded-full w-1/5" />
        </div>
      </div>
    </div>
  );
}