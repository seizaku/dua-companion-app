import { Badge } from "@/components/ui/badge";
import { Dua } from "@/model/dua";
import { NameGradient } from "./name-gradient";
import { Button } from "@/components/ui/button";
import { Share2Icon } from "@radix-ui/react-icons";
import { useCallback, useRef } from "react";
import { toBlob, toPng } from "html-to-image";

export const DuaCard = ({
  title,
  originalText,
  translation,
  explanation,
  source,
  reference,
  color,
}: Dua) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleShare = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toBlob(ref.current, { cacheBust: true })
      .then((blob) => {
        if (!blob) {
          console.error("Empty blob.");
          return;
        }
        if (navigator.share) {
          navigator
            .share({
              files: [new File([blob!], "dua.png", { type: blob!.type })],
              url: window.location.href,
            })
            .then(() => console.log("Shared successfully"))
            .catch((error) => console.error("Error sharing:", error));
        } else {
          console.error("Web Share API not supported.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div
      ref={ref}
      className="h-fit w-full bg-background rounded-md p-4 text-xs shadow-md border"
    >
      <h1 className="font-light mb-2">{title}</h1>
      <div className="flex gap-4 w-full max-h-[720px]">
        <NameGradient color={color!} />
        <div className="w-full flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-xs mb-1.5">Dua</h1>
            <p className="text-xs text-muted-foreground font-bold">
              {originalText
                ? originalText
                : "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ"}
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xs mb-1.5">Transliteration</h1>
            <p className="text-xs text-muted-foreground">
              {translation
                ? translation
                : "Rabbana taqabbal minna innaka antas Sameeaul Aleem"}
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xs mb-1.5">Meaning</h1>
            <p className="text-xs text-muted-foreground">
              {explanation
                ? explanation
                : "Our Lord! Accept (this service) from us: For Thou art the All-Hearing, the All-knowing."}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-4">
        <div className="flex gap-4">
          <Badge variant={"secondary"} className="font-light">
            {source}
          </Badge>
          <Badge variant={"secondary"} className="font-light">
            {reference}
          </Badge>
        </div>
        <Button
          onClick={(e) => {
            handleShare();
          }}
          variant={"ghost"}
          size={"icon"}
          className="h-6 text-xs"
        >
          <Share2Icon />
        </Button>
      </div>
    </div>
  );
};
