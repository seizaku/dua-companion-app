import { DuaCard } from "./dua-card";
import { useStore } from "@/stores/dua-store";
import { ShowMore } from "./show-more";
import { LoadingState } from "./loading-state";
import { useLoadingState } from "@/stores/loading-store";

export const ResultSection = () => {
  const { duas } = useStore();
  const { isLoading } = useLoadingState();
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 h-fit overflow-y-scroll no-scrollbar pb-4">
      {duas.map((dua) => (
        <DuaCard
          key={dua.id}
          id={dua.id}
          title={dua.title}
          originalText={dua.originalText}
          translation={dua.translation}
          explanation={dua.explanation}
          source={dua.source}
          reference={dua.reference}
        />
      ))}
      {isLoading && <LoadingState />}
      {duas.length > 0 ? (
        <ShowMore />
      ) : (
        <p className="text-center text-xs">No contents generated yet.</p>
      )}
    </div>
  );
};
