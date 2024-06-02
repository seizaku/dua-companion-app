import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className: string }) => {
  return (
    <div
      className={cn("relative h-24 w-24 bg-violet-100 rounded-xl", className)}
    >
      <Image src={"logo.svg"} fill alt="logo" />
    </div>
  );
};
