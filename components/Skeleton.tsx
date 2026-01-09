export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 transition-all"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded transition-all"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded transition-all"></div>
      <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded transition-all"></div>
    </div>
  );
}
