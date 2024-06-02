import { Badge } from "@/components/ui/badge";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const DonateSection = () => {
  return (
    <div className="mt-4 space-y-4">
      <h1 className="font-bold text-sm">Support</h1>
      <div className="text-xs w-96">
        Donate and Support the creation of free projects <br /> like this.{" "}
        <span>
          <Badge
            className="bg-violet-100 cursor-pointer font-light"
            variant={"secondary"}
          >
            Donate <ArrowTopRightIcon />
          </Badge>
        </span>
      </div>
      <p className="text-xs">Jazāka -llāhu khayran</p>
    </div>
  );
};
