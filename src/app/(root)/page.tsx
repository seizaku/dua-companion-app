"use client";
import { generateContent } from "@/server-actions/ai-chat";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [text, setText] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState("");
  async function handleSubmit() {
    setLoading(true);
    const result = await generateContent(text as string);
    console.log(result);
    setResponse(result);
    setLoading(false);
  }
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="container mx-auto max-w-md w-full m-12">
        {loading ? (
          <div
            className={`flex flex-col gap-2 mb-4 ${
              loading ? "opacity-100" : "opacity-0"
            }`}
          >
            <Skeleton className={`h-6 w-1/2 transition-all ease-in-out`} />
            <Skeleton className={`h-6 w-full transition-all ease-in-out`} />
            <Skeleton className={`h-6 w-full transition-all ease-in-out`} />
            <Skeleton className={`h-6 w-4/6 transition-all ease-in-out`} />
          </div>
        ) : (
          <article
            className="prose-sm mb-4"
            dangerouslySetInnerHTML={{ __html: response }}
          ></article>
        )}
        <Textarea
          disabled={loading}
          onChange={(e) => setText(e.currentTarget.value)}
        ></Textarea>
        <Button disabled={loading} onClick={handleSubmit}>
          {loading ? "Sending.." : "Send"}
        </Button>
      </div>
    </main>
  );
}
