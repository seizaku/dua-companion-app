import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="mt-16 text-center">
      <h1 className="text-3xl font-poppins"></h1>
      <Image
        src={"/heading.svg"}
        height={20}
        width={128}
        alt="heading-text"
        className="mx-auto"
      />
      <h2 className="font-medium text-lg text-zinc-700">{`I'm your Dua companion`}</h2>
    </div>
  );
};
