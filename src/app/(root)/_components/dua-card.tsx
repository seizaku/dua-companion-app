import { Badge } from "@/components/ui/badge";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Dua } from "@/model/dua";
import { NameGradient } from "./name-gradient";

export const DuaCard = ({
  title,
  originalText,
  translation,
  explanation,
  source,
  reference,
  color,
}: Dua) => {
  return (
    <div className="h-fit w-full rounded-md p-4 text-xs shadow-md border">
      <h1 className="font-light mb-2">{title}</h1>
      <div className="flex gap-4 w-full max-h-96">
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
      <div className="mt-4 flex gap-4">
        <Badge variant={"secondary"} className="font-light">
          {source}
        </Badge>
        <Badge variant={"secondary"} className="font-light">
          {reference}
        </Badge>
      </div>
    </div>
  );
};
