const FurnitureDetailsLoading = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <div className="max-w-300 mx-auto px-6 py-12">
        {/* Breadcrumb skeleton */}
        <div className="h-3 w-56 rounded bg-[#1A1A1A]/8 animate-pulse mb-10" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image skeleton */}
          <div className="aspect-4/5 rounded-lg bg-[#1A1A1A]/6 animate-pulse" />

          {/* Details skeleton */}
          <div>
            <div className="h-3 w-24 rounded bg-[#1A1A1A]/8 animate-pulse mb-4" />
            <div className="h-9 w-3/4 rounded bg-[#1A1A1A]/8 animate-pulse mb-3" />
            <div className="h-7 w-24 rounded bg-[#1A1A1A]/8 animate-pulse mb-6" />
            <div className="space-y-2 mb-8">
              <div className="h-3.5 w-full rounded bg-[#1A1A1A]/8 animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-[#1A1A1A]/8 animate-pulse" />
            </div>

            {/* Buttons skeleton */}
            <div className="h-5 w-24 rounded bg-[#1A1A1A]/8 animate-pulse mb-6" />
            <div className="flex gap-3 mb-10">
              <div className="h-14 flex-1 rounded-full bg-[#1A1A1A]/8 animate-pulse" />
              <div className="h-14 flex-1 rounded-full bg-[#1A1A1A]/8 animate-pulse" />
            </div>

            {/* Spec grid skeleton */}
            <div className="pt-8 border-t border-[#1A1A1A]/10">
              <div className="h-3 w-28 rounded bg-[#1A1A1A]/8 animate-pulse mb-4" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-22 rounded-md bg-[#1A1A1A]/6 animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetailsLoading;