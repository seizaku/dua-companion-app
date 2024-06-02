import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <div className="relative h-24 w-24 bg-violet-100 rounded-xl">
        <Image src={"logo.svg"} fill alt="logo" />
      </div>
      <h1 className="font-bold text-xs mt-2">Dua Companion</h1>
      <span className="text-xs text-muted-foreground">by @MoreMussa</span>
    </div>
  );
};
