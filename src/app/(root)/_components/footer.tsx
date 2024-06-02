import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="bg-background w-full border-t py-4">
      <div className="flex justify-between items-start">
        <Logo className="h-12 w-12" />
        <div>
          <h1 className="font-medium text-sm mb-1">By Mussa</h1>
          <p className="text-xs">mussa09@icloud.com</p>
        </div>
      </div>
    </footer>
  );
};
