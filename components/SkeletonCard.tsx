export default function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-64 w-full rounded-lg" />
      <div className="mt-2 bg-gray-300 h-4 w-3/4 rounded" />
      <div className="mt-1 bg-gray-300 h-4 w-1/2 rounded" />
    </div>
  );
}