"use client";

import { Button } from "@/components/ui/button";
import { generateContent } from "@/server-actions/ai-chat";
import { useStore } from "@/stores/dua-store";
import { useLoadingState } from "@/stores/loading-store";

export const ShowMore = () => {
  const { isLoading, setLoading } = useLoadingState();

  const { addDua, query } = useStore();
  async function handleSubmit() {
    try {
      setLoading(true);

      let result = await generateContent(query);
      let dua = eval(result);
      if (!dua) {
        setLoading(false);
        return;
      }

      for await (const item of dua) {
        addDua(
          item.title,
          item.originalText,
          item.translation,
          item.explanation,
          item.source,
          item.reference
        );
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }

  return (
    <Button
      onClick={handleSubmit}
      disabled={isLoading}
      className="w-fit mx-auto"
      variant={"secondary"}
      size={"sm"}
    >
      {!isLoading ? "Show More" : "Generating Content..."}
    </Button>
  );
};
