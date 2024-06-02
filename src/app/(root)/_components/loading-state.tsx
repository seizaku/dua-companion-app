import { Skeleton } from "@/components/ui/skeleton";

export const LoadingState = () => {
  return (
    <div className="w-full grid grid-cos-1">
      <div className="h-fit w-full rounded-lg p-4">
        <div className="h-56 flex gap-4">
          <div className="h-full w-4/6">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="h-full w-full space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-5/6" />
              <Skeleton className="h-2 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-5/6" />
              <Skeleton className="h-2 w-1/2" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit w-full rounded-lg p-4">
        <div className="h-56 flex gap-4">
          <div className="h-full w-4/6">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="h-full w-full space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-5/6" />
              <Skeleton className="h-2 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-5/6" />
              <Skeleton className="h-2 w-1/2" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit w-full rounded-lg p-4">
        <div className="h-56 flex gap-4">
          <div className="h-full w-4/6">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="h-full w-full space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-5/6" />
              <Skeleton className="h-2 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-2 w-1/4" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-5/6" />
              <Skeleton className="h-2 w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
