"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateContent } from "@/server-actions/ai-chat";
import { useStore } from "@/stores/dua-store";
import { FormEvent, useState } from "react";

export const PromptForm = () => {
  const [text, setText] = useState<string>();
  const [loading, setLoading] = useState(false);

  const { clear, addDua, setQuery } = useStore();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    clear();
    setQuery(text!);

    if (!text) {
      return;
    }
    setLoading(true);

    let result = await generateContent(text);
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
    <form
      onSubmit={handleSubmit}
      className="relative h-12 w-full mt-4 rounded-full group"
    >
      <Input
        disabled={loading}
        onChange={(e) => setText(e.currentTarget.value)}
        placeholder="I am feeling depressed"
        value={text || ""}
        className="h-12 rounded-full pl-8 focus-visible:ring-0 text-md shadow-none border placeholder:text-muted-foreground"
      />
      <Button
        disabled={loading}
        className="h-6 w-16 transition-all ease-in-out absolute top-3 right-2.5 border font-bold"
        variant={"secondary"}
        size={"sm"}
      >
        Send
      </Button>
    </form>
  );
};
