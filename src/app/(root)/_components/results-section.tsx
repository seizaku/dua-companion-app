import { DuaCard } from "./dua-card";
import { useStore } from "@/stores/dua-store";
import { ShowMore } from "./show-more";
import { Button } from "@/components/ui/button";

export const ResultSection = () => {
  const { duas } = useStore();

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
      {duas.length > 0 && <ShowMore />}
    </div>
  );
};
