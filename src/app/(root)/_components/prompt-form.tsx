"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateContent } from "@/server-actions/ai-chat";
import { useStore } from "@/stores/dua-store";
import { FormEvent, useEffect, useState } from "react";
import { useLoadingState } from "@/stores/loading-store";
import Typewriter from "typewriter-effect";

export const PromptForm = () => {
  const [text, setText] = useState<string>();
  const { isLoading, setLoading } = useLoadingState();
  const [isFocus, setFocus] = useState(false);

  const { clear, addDua, setQuery } = useStore();
  async function handleSubmit(e: FormEvent) {
    try {
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
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative h-12 w-full mt-4 rounded-full group"
    >
      <div className="relative">
        <div
          className={`${
            isFocus && "hidden"
          } absolute top-3 left-8 text-muted-foreground`}
        >
          <Typewriter
            options={{
              strings: [
                "I am feeling depressed",
                "I am feeling grateful",
                "I am feeling low",
                "I am feeling lonely",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Input
          onFocus={() => setFocus(true)}
          disabled={isLoading}
          onChange={(e) => setText(e.currentTarget.value)}
          value={text || ""}
          className="absolute h-12 bg-transparent rounded-full pl-8 focus-visible:ring-0 text-md shadow-none border placeholder:text-muted-foreground"
        />
      </div>
      <Button
        disabled={isLoading}
        className="h-6 w-16 transition-all ease-in-out absolute top-3 right-2.5 border font-bold"
        variant={"secondary"}
        size={"sm"}
      >
        Send
      </Button>
    </form>
  );
};
