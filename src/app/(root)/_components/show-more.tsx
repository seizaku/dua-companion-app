"use client";

import { Button } from "@/components/ui/button";
import { generateContent } from "@/server-actions/ai-chat";
import { useStore } from "@/stores/dua-store";
import { useState } from "react";

export const ShowMore = () => {
  const [loading, setLoading] = useState(false);

  const { addDua, query } = useStore();
  async function handleSubmit() {
    setLoading(true);

    let result = await generateContent(query);
    let dua = eval(result);
    if (!dua) {
      setLoading(false);
      return;
    }

    console.log(dua);
    for (let i = 0; i < dua.length; i++) {
      addDua(
        dua[i].title,
        dua[i].originalText,
        dua[i].translation,
        dua[i].explanation,
        dua[i].source,
        dua[i].reference
      );
    }

    setLoading(false);
  }

  return (
    <Button
      onClick={handleSubmit}
      disabled={loading}
      className="w-fit mx-auto"
      variant={"secondary"}
      size={"sm"}
    >
      Show More
    </Button>
  );
};
