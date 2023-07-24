export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row animate-pulse">
      <ul className="list-none">
        {Array.from({ length: 8 }, (miniBio: any, index: number) => {
          return (
            <div
              className="text-white flex flex-col justify-center items-center my-1"
              key={index}
            >
              <div className="bg-gray-700/50 rounded-lg w-72">
                <h2 className="text-lg invisible">This is a skeleton render</h2>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
