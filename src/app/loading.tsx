export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex gap-3 flex-wrap justify-center items-center my-4 animate-pulse">
      {Array.from({ length: 7 }, (post: any, index: number) => {
        return (
          <div
            className="w-36 min-h-[200px] h-[200px] border flex flex-col justify-between items-center bg-gray-700/50"
            key={index}
          ></div>
        );
      })}
    </div>
  );
}
