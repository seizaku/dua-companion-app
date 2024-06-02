import { Logo } from "@/components/logo";
export const Header = () => {
  return (
    <div>
      <Logo className="h-20 w-20" />
      <h1 className="font-bold text-xs mt-2">Dua Companion</h1>
      <span className="text-xs text-muted-foreground">by @MoreMussa</span>
    </div>
  );
};
