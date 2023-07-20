"use client";

export const Marquee = ({
  wordList,
  className = "",
  onClick,
}: {
  wordList: string[];
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <main
      onClick={onClick}
      className={`${className} text-light-primary group hover:animate-none opacity-60 hover:opacity-100 font-display relative flex overflow-x-hidden h-14 border-dark-secondary text-2xl items-center w-[80%] overflow-hidden`}
      border-cut="footer-cta"
    >
      <div className="animate-marquee group-hover:animate-none align-bottom whitespace-nowrap items-center flex md:gap-x-4">
        {wordList.map((word: string, i: number) => (
          <>
            <p key={word + i}>{word}</p>
          </>
        ))}
      </div>

      <div className="absolute px-2 group-hover:animate-none group-hover:opacity-0 animate-marquee2 items-center whitespace-nowrap flex md:gap-x-4">
        {wordList.map((word: string, i: number) => (
          <>
            <p key={word + i}>{word}</p>
          </>
        ))}
      </div>
    </main>
  );
};
