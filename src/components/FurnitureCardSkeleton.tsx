const FurnitureCardSkeleton = () => {
  return (
    <div>
      <div className="aspect-4/5 rounded-md bg-[#1A1A1A]/6 animate-pulse mb-3" />
      <div className="h-3.5 w-3/4 rounded bg-[#1A1A1A]/8 animate-pulse mb-2" />
      <div className="h-3 w-full rounded bg-[#1A1A1A]/8 animate-pulse mb-1.5" />
      <div className="h-3 w-1/2 rounded bg-[#1A1A1A]/8 animate-pulse" />
    </div>
  );
};

export default FurnitureCardSkeleton;